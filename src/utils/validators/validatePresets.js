const validate = {
    isBasicValid: (spec) => {
        let isNum = false
        spec.split("").forEach(item => {
            if (/[^a-zA-Z]/.test(item)) isNum = true;
        })
        return !(spec.trim().length > 20 || spec.length < 0 || isNum);
    },
    isModelValid: (spec) => {
        let isEq = false
        spec.split("").forEach(item => {
            if (/[^a-zA-Z\d]/.test(item)) isEq = true;
        })
        return !(spec.trim().length > 20 || spec.length < 0 || isEq);
    },
    isNumberValid: (value, length, max) => {
        let isChar = false;
        value.split("").forEach(item => {
            if (!/[^a-zA-Z]/.test(item)) isChar = true;
        })
        return value.length <= length && !isChar && value <= max;
    },
}

export default validate;