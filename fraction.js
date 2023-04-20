compareTo(other) {
    const fraction1Value = this.numerator * other.denominator;
    const fraction2Value = other.numerator * this.denominator;

    if (fraction1Value < fraction2Value) {
      return -1; // Fraction 1 is smaller
    } else if (fraction1Value > fraction2Value) {
      return 1; // Fraction 1 is larger
    } else {
      return 0; // Fractions are equal
    }
