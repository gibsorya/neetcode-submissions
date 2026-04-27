class TextProcessor:
    # Implement method overloading for format_text method
    def format_text(self, text, text2: str = None) -> str:
        if text2 is None:
            return str.upper(text)
        else:
            return text + text2


# Don't modify the code below
processor = TextProcessor()
print(processor.format_text("hello"))
print(processor.format_text("hello", "world"))
