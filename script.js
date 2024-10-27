document.getElementById('convertButton').addEventListener('click', function() {
    const inputText = document.getElementById('inputText').value;
    const outputText = convertText(inputText);
    document.getElementById('outputText').value = outputText;
});

function convertText(text) {
    const replacements = {
        'А': '4', 'В': '8', 'Г': '2', 'Д': '9', 'Е': '3', 'Ж': ')1(', 'З': '3', 'И': '1', 'К': '1<', 'Л': '^',
        'М': '^^', 'Н': '11', 'О': '0', 'П': '11', 'Р': '?', 'С': '(', 'Т': '7', 'У': '7', 'Ф': '<1>', 'Х': '%',
        'Ц': '11,', 'Ч': '4', 'Ш': '111', 'Щ': '111,', 'Ъ': '-6', 'Ы': '61', 'Ь': '6', 'Э': '3', 'Ю': '10', 'Я': '9',
        'а': '4', 'в': '8', 'г': '2', 'д': '9', 'е': '3', 'ж': ')1(', 'з': '3', 'и': '1', 'к': '1<', 'л': '^',
        'м': '^^', 'н': '11', 'о': '0', 'п': '11', 'р': '?', 'с': '(', 'т': '7', 'у': '7', 'ф': '<1>', 'х': '%',
        'ц': '11,', 'ч': '4', 'ш': '111', 'щ': '111,', 'ъ': '-6', 'ы': '61', 'ь': '6', 'э': '3', 'ю': '10', 'я': '9'
    };

    return text.split('').map(char => replacements[char] || char).join('');
}
