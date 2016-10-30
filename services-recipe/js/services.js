angular.module("services", [])
	.value("factor", "dogs")
	.service("multiplier", ["factor", Multiplier]);
