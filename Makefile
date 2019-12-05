run: esctime.xex esctimec.xex
	start $<

esctime.xex: esctime.asx
	xasm -o $@ -d COMPATIBLE=0 $<

esctimec.xex: esctime.asx
	xasm -o $@ -d COMPATIBLE=1 -q $<

esctime.zip: esctime.xex esctimec.xex esctime.txt
	7z a -mx=9 -bd -bso0 -tzip $@ $^
