/*
================= Solution ===================

        |                   |  /                
        |                   |/ g              
     g2 |------------------/|------------
        |                /  |
        |       d(p,g) /    | g2-p2
        |            /      |
     p2 |----------/---------------------
        |      p / |  g1-p1 |   
        |      /   |        |
        |    /     |        |
        |  /       |        |
        |/_________|________|____________
        |          p1       g1
        |

==============================================
*/

// Method Form
function euclideanDistance(v1 = [], v2 = []) {
    const [g1 = 0, g2 = 0] = v1;
    const [p1 = 0, p2 = 0] = v2;

    // Cattetus
    let g1_p1 = g1 - p1;
    let g2_p2 = g2 - p2;

    // Hypetonus
    return Math.trunc(Math.sqrt((g1_p1) ** 2 + (g2_p2) ** 2));
}

// (3, 4) və (7, 7) nöqtələri arasındakı məsafə
console.log(euclideanDistance([3, 4], [7, 7])); // cavab: 5
// (3, 4) və (4, 3) nöqtələri arasındakı məsafə
console.log(euclideanDistance([3, 4], [4, 3])); // cavab: 5
console.log(euclideanDistance([], [])); // cavab: 0
console.log(euclideanDistance()); // cavab: 0