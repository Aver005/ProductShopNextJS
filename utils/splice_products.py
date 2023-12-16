import json
import uuid

folder = "../data/products"
# Чтение данных из файла products.json
with open('products.json', 'r', encoding="utf-8") as file:
    products_data = json.load(file)

# Перебор продуктов и создание отдельного файла для каждого
for product in products_data:
    filename = f"{uuid.uuid4()}.txt"
    with open(f"{folder}/{filename}", 'w', encoding="utf-8") as product_file:
        product_file.write(json.dumps(product, ensure_ascii=False, indent=4))

print("Файлы успешно созданы.")
