'reinit'
'open F:\reanalysis\output_2\olr.32-48.ff.trans.ctl'
*'open F:\reanalysis\output_2\olr.32-48.fb.trans.ctl'
'open F:\reanalysis\output\filter2\olr.2011_-15-30_60-150.ctl'
'open F:\reanalysis\output\filter2\olr.ltm_-15-30_60-150.ctl'
'enable print F:\reanalysis\img\filter3\H_direction_ff_V2.gmf'
*whilte to blue
'set rgb 25 18 215 239'
'set rgb 26 24 160 224'
'set rgb 27 10 134 229'
'set rgb 28 3 121 242'
'set rgb 29 62 44 236'
'set rgb 30 86 31 226'
'set rgb 31 59 25 187'
'set rgb 32 62 3 128'
*red-yellow
'set rgb 33 252 75 45'
'set rgb 34 253 118 52'
'set rgb 35 252 154 38'
'set rgb 36 248 205 89'
'set rgb 37 250 235 110'
'set rgb 38 238 251 132'
*'set cint 10'
'set clevs -60 -50 -40 -30 -20 -10 0 10 20 30 40 50'
'set ccols 32 31 30 29 28 27 26 38 37 36 35 34 33'
'set lon 110'
'set lat -10 30'
'set t 213 334'
*'set t 182 334'
'set xyrev on'
'set gxout shaded'
'd olr'
'run cbar'
'draw title olr filter(forward) 110E-10S 30N'
'print' 
'c'
'set clevs -60 -50 -40 -30 -20 -10 0 10 20 30 40 50'
'set ccols 32 31 30 29 28 27 26 38 37 36 35 34 33'
'set lat -10 25'
'set t 244 334'
'set xyrev on'
'set gxout shaded'
'd olr'
'run cbar'
'draw title olr filter(forward) 110E-10S 30N'
'print' 
'c'
'set clevs -60 -50 -40 -30 -20 -10 0 10 20 30 40 50'
'set ccols 32 31 30 29 28 27 26 38 37 36 35 34 33'
*'set t 213 334'
'set t 213 364'
*'set t 192 364'
'set lat 18'
'set lon 60 170'
'd ave(olr,lat=15,lat=20)'
'run cbar'
'draw title filter(forward,ave15-20N) 60E to 170E'
*'set gxout contour'
*'d ave(olr,lat=15,lat=20)'
'print' 
'c'
'set gxout shaded'
'set clevs -60 -50 -40 -30 -20 -10 0 10 20 30 40 50'
'set ccols 32 31 30 29 28 27 26 38 37 36 35 34 33'
'set t 244 334'
'set lat 18'
'set lon 80 170'
'd ave(olr,lat=15,lat=20)'
'run cbar'
'draw title olr filter(forward,ave.15N-20N) 80E to 170E'
'print' 
'c'
'set clevs -60 -50 -40 -30 -20 -10 0 10 20 30 40 50'
'set ccols 32 31 30 29 28 27 26 38 37 36 35 34 33'
'set t 213 243'

'set lat 18'
'set lon 80 140'
'd ave(olr,lat=15,lat=20)'
'run cbar'
'draw title olr filter(forward) ave-80E 140E Aug.'
'print' 
'c'
'set clevs -60 -50 -40 -30 -20 -10 0 10 20 30 40 50'
'set ccols 32 31 30 29 28 27 26 38 37 36 35 34 33'
'set t 244 273'
'set lat 18'
'set lon 80 140'
'd ave(olr,lat=15,lat=20)'
'run cbar'
'draw title olr filter(forward) ave-80E 140E Sep.'
'print' 
'c'
'set clevs -60 -50 -40 -30 -20 -10 0 10 20 30 40 50'
'set ccols 32 31 30 29 28 27 26 38 37 36 35 34 33'
'set t 274 304'
'set lat 18'
'set lon 80 140'
'd ave(olr,lat=15,lat=20)'
'run cbar'
'draw title olr filter(forward) ave-80E 140E Oct.'
'print' 
'c'
'set clevs -60 -50 -40 -30 -20 -10 0 10 20 30 40 50'
'set ccols 32 31 30 29 28 27 26 38 37 36 35 34 33'
'set t 305 334'
'set lat 18'
'set lon 80 140'
'd ave(olr,lat=15,lat=20)'
'run cbar'
'draw title olr filter(forward) ave-80E 140E Nov.'
'print' 
'disable print'
;
