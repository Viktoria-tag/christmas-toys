export const dictionary = {
    'ball': 'шар',
    'figurine': 'фигурка',
    'snowflake': 'снежинка',
    'cone': 'шишка',
    'bell': 'колокольчик',
    'yellow': "желтый",
    'white': "белый",
    'red': "красный",
    'blue': "синий",
    'green': "зеленый",
    'small': "маленький",
    'average': "средний",
    'big': "большой",
}

export const translate = (value: string) => {
    return dictionary[value as keyof typeof dictionary]
}