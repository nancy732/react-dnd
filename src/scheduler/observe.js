let position = [9, 0]
let observer = null

function emitChange() {
    observer(position)
}

export function observe(o) {
    if (observer) {
        throw new Error('Multiple observers not implemented.')
    }

    observer = o
    emitChange()
}

export function moveCard(toX, toY) {
    position = [toX, toY]

    emitChange()
}

