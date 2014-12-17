

  Vector2D = function(x,y) {
    this.x = x || 0;
    this.y = y || 0;
  }

  Vector2D.prototype.add = function(vector){
    this.x += vector.x;
    this.y += vector.y;

  }
  Vector2D.prototype.divide = function(scalar){
    this.x /= scalar;
    this.y /= scalar;
  }
