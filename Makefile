run: esctime.xex
	start $<

%.xex: %.asx
	xasm -o $@ $<
