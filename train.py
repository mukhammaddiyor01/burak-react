# TASK X
# Object tarkibida (nested bo'lsa ham) berilgan kalit necha marta takrorlanganini sanang.
# Masalan: countOccurrences({model: "A", s: {model: "B"}}, "model") return 2

def countOccurrences(obj, key):
    count = 0

    if isinstance(obj, dict):
        for k, v in obj.items():
            if k == key:
                count += 1

            if isinstance(v, dict):
                count += countOccurrences(v, key)

    return count


print(countOccurrences({"model": "A", "s": {"model": "B"}}, "model"))
