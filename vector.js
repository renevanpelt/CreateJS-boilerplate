  Vector2D = function(x,y) {
    this.x = x || 0;
    this.y = y || 0;
  }

  Vector2D.prototype.addV = function(vector){
    this.x += vector.x;
    this.y += vector.y;

  }
