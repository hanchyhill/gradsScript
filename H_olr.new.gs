'reinit'
*'open F:\reanalysis\output\olr.filter(30t_90t)_-15-25_60-150.ctl'
*'open F:\reanalysis\output\olr.filter(60t_80t)_-15-25_60-150.ctl'
'open F:\reanalysis\output\olr.2011_-15-25_60-150.ctl'
'open F:\reanalysis\output\olr.ltm-15-25_60-150.ctl'
*'open F:\reanalysis\output\filter2\olr.filter(8t_17t)_-15-30_60-150.ctl'
'enable print F:\reanalysis\img\filter_2\H_olr.origin.gmf'
*whilte to blue
'set rgb 24 167 250 200'
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
'set clevs -120 -100 -80 -60 -40 -20 0 20 40 60 80 100'
'set ccols 32 31 30 29 28 27 26 38 37 36 35 34 33'
'set lon 110'
'set lat 0 25'
'set t 244 304'
*'set t 182 334'
'set xyrev on'
'set gxout shaded'
*'d olr'
'd ave(olr-olr.2,lon=107.5,lon=112.5)'
'run cbar'
'draw title olr filter( ,107.5-112.5E) 0- 30N'
*No. 1
'print' 
'c'
*'set clevs -120 -100 -80 -60 -40 -20 0 20 40 60 80 100'
'set clevs -120 -102 -84 -66 -48 -30 0 20 40 60 80 100'
*'set clevs -60 -50 -40 -30 -20 -10 0 10 20 30 40 50'
'set ccols 32 31 30 29 28 27 26 38 37 36 35 34 33'
'set lat 0 25'
'set t 244 334'
'set xyrev on'
'set gxout shaded'
'd olr-olr.2'
'run cbar'
'draw title olr 110E ,0-30N'
*No. 2
'print' 
'c'
'set clevs -120 -102 -84 -66 -48 -30 0 20 40 60 80 100'
*'set clevs -120 -100 -80 -60 -40 -20 0 20 40 60 80 100'
'set ccols 32 31 30 29 28 27 26 38 37 36 35 34 33'
'set t 213 334'
'set lat 18'
'set lon 60 150'
'd ave(olr-olr.2,lat=10,lat=17.5)'
'run cbar'
'draw title filter( ,ave15-20N)-60E 150E'
*No. 3
'print' 
'c'
'set clevs -60 -50 -40 -30 -20 -10 0 10 20 30 40 50'
'set clevs -120 -100 -80 -60 -40 -20 0 20 40 60 80 100'
'set ccols 32 31 30 29 28 27 26 38 37 36 35 34 33'
'set t 244 334'
'set lat 18'
'set lon 80 140'
'd ave(olr-olr.2,lat=10,lat=17.5)'
'run cbar'
'draw title olr origin( 10N-17.5N.ave)-80E 140E'
*No. 4
'print' 
'c'
'set clevs -60 -50 -40 -30 -20 -10 0 10 20 30 40 50'
'set clevs -120 -100 -80 -60 -40 -20 0 20 40 60 80 100'
'set ccols 32 31 30 29 28 27 26 38 37 36 35 34 33'
'set t 213 243'

'set lat 18'
'set lon 80 140'
'd ave(olr-olr.2,lat=15,lat=20)'
'run cbar'
'draw title olr filter( 15N-20N.ave) ave-80E 140E Aug.'
*No. 5
'print' 
'c'
*'set clevs -60 -50 -40 -30 -20 -10 0 10 20 30 40 50'
*'set clevs -120  -70  -30  0 20 40 60 80 100'
'set clevs -100 -80 -60 -40 -20 0 20 40 60 80 100'
'set ccols 32  30 29 27 26 24 38 37 36 35 34 33'
*'set t 244 273'
'set t 244 304'
'set lat 18'
'set lon 80 140'
'd ave(olr-olr.2,lat=15,lat=20)'
'run cbar'
'draw title olr ( 15N-20N.ave)-80E 140E Sep.-Oct.'
*No. 6
'print' 
'c'
'set clevs -60 -50 -40 -30 -20 -10 0 10 20 30 40 50'
'set ccols 32 31 30 29 28 27 26 38 37 36 35 34 33'
'set t 274 304'
'set lat 18'
'set lon 80 140'
'd ave(olr-olr.2,lat=10,lat=17.5)'
'run cbar'
'draw title olr filter(  10N-17.5N.ave) -80E 140E Oct.'
'print' 
'c'
'set clevs -60 -50 -40 -30 -20 -10 0 10 20 30 40 50'
'set ccols 32 31 30 29 28 27 26 38 37 36 35 34 33'
'set t 305 334'
'set lat 18'
'set lon 80 140'
'd ave(olr-olr.2,lat=10,lat=17.5)'
'run cbar'
'draw title olr filter( ,10N-17.5N.ave)-80E 140E Nov.'
'print' 
'disable print'
;
