function manufacture(gifts, materials) {
    return gifts.filter(gift => {
        const uniqueChars = [...new Set(gift + materials)];
        return uniqueChars.length === materials.length;
    });
}