function rectangularCollisions({rectangle1, rectangle2}) {
    return (
        rectangle1.position.x ==
         rectangle2.position.x &&
        rectangle1.position.y ==
         rectangle2.position.y
    )
}