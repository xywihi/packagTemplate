export const getLevelName=(value)=>{
    switch (value) {
        case 1:

            return value + 'st'
        case 2:

            return value + 'nd'
        case 3:

            return value + 'st'

        default:
            return value + 'th'
    }
}