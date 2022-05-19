const getCoords = (Element: HTMLElement) => {
    const rect = Element.getBoundingClientRect()
    const minX = rect.left;
    const maxX = rect.right;
    const minY = rect.top;
    const maxY = rect.bottom;
    return {
        minX,
        maxX,
        minY,
        maxY
    }
}

const isInside = (ElementInner: HTMLElement, Element: HTMLElement ) => {
    const coords = getCoords(Element)
    const coordsInner = getCoords(ElementInner)
    return coords.minX < coordsInner.maxX && coords.maxX > coordsInner.minX && coords.minY < coordsInner.maxY && coords.maxY > coordsInner.minY

}

export {
    getCoords,
    isInside
}
