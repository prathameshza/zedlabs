import os
from pathlib import Path

# ========================
# CONFIG
# ========================

ROOT_DIR = Path(__file__).parent.resolve()
OUTPUT_FILE = ROOT_DIR / "collections.txt"

INCLUDE_FILES = {
    "package.json",
    "tsconfig.json",
    "astro.config.mjs",
    "README.md",
}

INCLUDE_DIRS = {
    "src",
}

EXCLUDE_DIRS = {
    "node_modules",
    "dist",
    ".git",
    ".astro",
    ".vercel",
    ".vscode",
}

TEXT_EXTENSIONS = {
    ".js", ".ts", ".tsx", ".jsx",
    ".json", ".astro", ".md",
    ".css", ".scss", ".html",
    ".txt", ".yml", ".yaml",
}

ASSET_EXTENSIONS = {
    ".png", ".jpg", ".jpeg", ".webp",
    ".svg", ".gif",
    ".mp4", ".mov", ".webm",
    ".woff", ".woff2", ".ttf", ".otf",
    ".pdf",
}

# ========================
# HELPERS
# ========================

def classify_file(path: Path):
    """
    Returns:
        'text'  -> readable text file
        'asset' -> binary asset (path only)
        None    -> ignored
    """
    ext = path.suffix.lower()

    if path.name in INCLUDE_FILES or ext in TEXT_EXTENSIONS:
        return "text"

    if ext in ASSET_EXTENSIONS:
        return "asset"

    return None


def collect_files():
    collected = []

    # Root-level config files
    for name in INCLUDE_FILES:
        path = ROOT_DIR / name
        if path.exists():
            collected.append((path, "text"))

    # Walk included directories
    for dir_name in INCLUDE_DIRS:
        base = ROOT_DIR / dir_name
        if not base.exists():
            continue

        for root, dirs, files in os.walk(base):
            dirs[:] = [d for d in dirs if d not in EXCLUDE_DIRS]

            for filename in files:
                path = Path(root) / filename
                ftype = classify_file(path)
                if ftype:
                    collected.append((path, ftype))

    return sorted(collected, key=lambda x: str(x[0]))


def write_collections(files):
    with open(OUTPUT_FILE, "w", encoding="utf-8") as out:
        for file_path, ftype in files:
            rel_path = file_path.relative_to(ROOT_DIR)

            if ftype == "asset":
                out.write(f"Asset file: {rel_path}\n\n")
                continue

            out.write(f"File location: {rel_path}\n\n")

            try:
                content = file_path.read_text(encoding="utf-8")
            except Exception as e:
                content = f"<<Could not read file: {e}>>"

            out.write(content)
            out.write("\n\n" + "-" * 80 + "\n\n")


# ========================
# MAIN
# ========================

if __name__ == "__main__":
    files = collect_files()
    write_collections(files)
    print(f"✅ collections.txt generated with {len(files)} entries.")
