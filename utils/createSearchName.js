export default function createSearchName(name) {
    const searchName = name.toLowerCase().trim().replaceAll(/\s/g,'');
    return searchName;
}