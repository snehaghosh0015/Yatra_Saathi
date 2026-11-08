#!/usr/bin/env python3
"""Inline styles.css and app.js into one deployable HTML file.

Usage:
    python3 build.py                # -> dist/index.html
    python3 build.py --out FILE     # -> FILE

The source files stay untouched: index.html keeps its external <link> and
<script src> tags, and this script produces the single-file build from them.
Exits non-zero if the inlined result is not identical to its inputs.
"""

from __future__ import annotations

import os
import sys

ROOT = os.path.dirname(os.path.abspath(__file__))
LINK_TAG = '<link rel="stylesheet" href="styles.css" />'
SCRIPT_TAG = '<script src="app.js"></script>'


def read(name: str) -> str:
    with open(os.path.join(ROOT, name), encoding="utf-8") as f:
        return f.read()


def fail(message: str) -> None:
    print("BUILD FAILED: " + message)
    sys.exit(1)


def build() -> tuple[str, str, str, str]:
    html = read("index.html")
    css = read("styles.css")
    js = read("app.js")

    if html.count(LINK_TAG) != 1:
        fail(f"expected exactly one {LINK_TAG} in index.html, found {html.count(LINK_TAG)}")
    if html.count(SCRIPT_TAG) != 1:
        fail(f"expected exactly one {SCRIPT_TAG} in index.html, found {html.count(SCRIPT_TAG)}")

    style_block = "<style>\n" + css.rstrip("\n") + "\n</style>"
    script_block = "<script>\n" + js.rstrip("\n") + "\n</script>"

    out = html.replace(LINK_TAG, style_block, 1).replace(SCRIPT_TAG, script_block, 1)
    return html, css, js, out


def verify(html: str, css: str, js: str, out: str) -> None:
    problems: list[str] = []

    if "styles.css" in out or "app.js" in out:
        problems.append("output still references styles.css or app.js")

    for tag in ("<style>", "</style>"):
        if out.count(tag) != 1:
            problems.append(f"expected 1 {tag}, found {out.count(tag)}")
    if out.count("<script>") != 1:
        problems.append(f"expected 1 inline <script>, found {out.count('<script>')}")
    if out.count('<script src="http') != html.count('<script src="http'):
        problems.append("CDN script tags changed")
    if out.count("{") != out.count("}"):
        problems.append("unbalanced braces in output")

    # the inlined blocks must reproduce the source files exactly
    style_start = out.index("<style>") + len("<style>\n")
    style_end = out.index("</style>", style_start)
    if out[style_start:style_end].rstrip("\n") != css.rstrip("\n"):
        problems.append("inlined <style> content differs from styles.css")

    script_start = out.index("<script>") + len("<script>\n")
    script_end = out.index("</script>", script_start)
    if out[script_start:script_end].rstrip("\n") != js.rstrip("\n"):
        problems.append("inlined <script> content differs from app.js")

    # everything except the two replaced tags must be unchanged
    stripped = out
    stripped = stripped.replace("<style>\n" + css.rstrip("\n") + "\n</style>", "")
    stripped = stripped.replace("<script>\n" + js.rstrip("\n") + "\n</script>", "")
    if stripped != html.replace(LINK_TAG, "").replace(SCRIPT_TAG, ""):
        problems.append("HTML around the inlined blocks changed")

    if problems:
        for problem in problems:
            print("  ! " + problem)
        fail(f"{len(problems)} verification problem(s)")


def main() -> None:
    out_path = os.path.join(ROOT, "dist", "index.html")
    argv = sys.argv[1:]
    if argv:
        if argv[0] not in ("--out", "-o") or len(argv) != 2:
            fail("usage: python3 build.py [--out FILE]")
        out_path = os.path.abspath(argv[1])

    html, css, js, out = build()
    verify(html, css, js, out)

    os.makedirs(os.path.dirname(out_path), exist_ok=True)
    with open(out_path, "w", encoding="utf-8") as f:
        f.write(out)

    print(f"index.html   {len(html):>8,} chars")
    print(f"styles.css   {len(css):>8,} chars")
    print(f"app.js       {len(js):>8,} chars")
    print(f"-> {os.path.relpath(out_path, ROOT)}  {len(out):>8,} chars, {out.count(chr(10)):,} lines")
    print("verified: single style block, single inline script, CDN tags intact, inlined text identical")


if __name__ == "__main__":
    main()
