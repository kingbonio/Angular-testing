angular.module("services", [])
    .value("factor", 6)
    .service("multiplier", ["factor", Multiplier]);
