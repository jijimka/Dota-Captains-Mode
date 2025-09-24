export function isFirstPickRadiant(importedMatch:any) {
    for (let i = 0; i < importedMatch.length; i++) {
        if (importedMatch[i].is_pick) {
            return importedMatch[i].team === 0
        }
    }
    return null
}