export function getElementById(id, list) {
    for (let oneCase of list) {
        if (oneCase.id === id) {
            return oneCase;
        }
    }
    return false
}
