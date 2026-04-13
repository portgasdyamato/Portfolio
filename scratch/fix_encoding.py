import os

path = r'c:\Users\HP\OneDrive\Desktop\appx\prtflio\components\project-detail-client.tsx'
with open(path, 'rb') as f:
    content = f.read()

# Try to detect if it's UTF-16
try:
    decoded = content.decode('utf-16')
    print("Decoded successfully as UTF-16")
    with open(path, 'w', encoding='utf-8') as f:
        f.write(decoded)
    print("Success: Converted to UTF-8")
except Exception as e:
    print(f"Failed UTF-16 decode: {e}")
