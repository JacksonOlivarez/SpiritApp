// Will Contain things like cat/dog color code/file.
//  Current amount of money
//  Current Room Decorations (Boolean list?)
//  Clothes Combo

const state = {
    currency = 0,
    characterState = "-1",
    // Format: 0000
    // First Digit - 0: Dog, 1: Cat
    // Second Digit - 0-9: Color/Pattern
    // Third Digit - 0-1: Shirt
    // Fourth Digit - 0-9: Shirt Color
    roomState = "000",
    // Format: 000 = Default
    // First Digit - 0-2: Bed Selection
    // Second Digit - 0-2: Rug Selection
    // Third Digit - 0-2: Chair Selection
}
