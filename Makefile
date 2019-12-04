run: esctime.xex esctimec.xex
	start $<

esctime.xex: esctime.asx
	xasm -o $@ -d COMPATIBLE=0 $<

esctimec.xex: esctime.asx
	xasm -o $@ -d COMPATIBLE=1 -q $<
