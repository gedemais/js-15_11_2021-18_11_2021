

cylinder_a = new Cylinder(0.28, 0.76);
cylinder_b = new Cylinder(1.4, 3.2);
cylinder_c = new Cylinder(0.99, 1.77);
cylinder_d = new Cylinder(11.2, 11.1);
cylinder_e = new Cylinder(0.1, 2.8);

console.assert(cylinder_a.get_volume() == 0.5080834966797702, 'a');
console.assert(cylinder_b.get_volume() == 45.03787228186327, 'b');
console.assert(cylinder_c.get_volume() == 9.743872668187148, 'c');
console.assert(cylinder_d.get_volume() == 4335.247065506542, 'd');
console.assert(cylinder_e.get_volume() == 2.4630086404143974, 'e');
