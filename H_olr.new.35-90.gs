'reinit'
'open F:\reanalysis\output\filter2\olr.filter(35t_90t)_-15-30_60-150.ctl'
*'open F:\reanalysis\output\olr.filter(60t_80t)_-15-25_60-150.ctl'
*'open F:\reanalysis\output\filter2\olr.filter(8t_17t)_-15-30_60-150.ctl'
'enable print F:\reanalysis\img\final\H_olr.filter.3.(30t_90t)H_-15-30.gmf'
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
'set clevs -30 -25 -20 -15 -10 -5 0 5 10 15 20 25'
'set ccols 32 31 30 29 28 27 26 38 37 36 35 34 33'
'set lon 110'
'set lat 0 30'
'set grads off'
'set grid off'
'set xlopts 1 4 0.18'
'set ylopts 1 4 0.18'
'set t 52 365'
*'set t 182 334'
'set xyrev on'
'set gxout shaded'
*'d olr'
'd ave(olr,lon=107.5,lon=112.5)'
'run cbarn'
'draw title olr filter(35d_90d,107.5-112.5E) 0- 30N'
'print' 
'c'
'set clevs -60 -50 -40 -30 -20 -10 0 10 20 30 40 50'
'set ccols 32 31 30 29 28 27 26 38 37 36 35 34 33'
'set lat 0 25'
'set t 244 334'
'set xyrev on'
'set gxout shaded'
'set grads off'
'set grid off'
'set xlopts 1 4 0.13'
'set ylopts 1 4 0.13'
'd olr'
'cbarn'
'draw title olr filter(8d_17d) 110E 0-30N'
'print' 
'c'
'set clevs -60 -50 -40 -30 -20 -10 0 10 20 30 40 50'
'set ccols 32 31 30 29 28 27 26 38 37 36 35 34 33'
'set t 213 334'
'set lat 18'
'set lon 60 150'
'd ave(olr,lat=10,lat=17.5)'
'run cbar'
'draw title filter(8d_17d,ave15-20N)-60E 150E'
'print' 
'c'
'set clevs -30 -25 -20 -15 -10 -5 0 5 10 15 20 25'
'set ccols 32 31 30 29 28 27 26 38 37 36 35 34 33'
'set t 152 365'
'set lat 18'
'set lon 60 150'
'set grads off'
'set grid off'
'set xlopts 1 4 0.18'
'set ylopts 1 4 0.18'
'd ave(olr,lat=15,lat=20)'
'run cbarn 1 0 5.82 0.36'
*'run cbarn 1 1'
'draw title olr filter(35d_90d,15N-20N.ave)-60E 150E'
'print' 
'c'
'set clevs -60 -50 -40 -30 -20 -10 0 10 20 30 40 50'
'set ccols 32 31 30 29 28 27 26 38 37 36 35 34 33'

'set t 213 243'
'set lat 18'
'set lon 80 140'
'd ave(olr,lat=10,lat=17.5)'
'run cbarn'
'draw title olr filter(8d_17d,10N-17.5N.ave) ave-80E 140E Aug.'
'print' 
'c'
'set clevs -60 -50 -40 -30 -20 -10 0 10 20 30 40 50'
'set ccols 32 31 30 29 28 27 26 38 37 36 35 34 33'
*'set t 244 273'
'set t 244 304'
'set lat 18'
'set lon 80 140'
'd ave(olr,lat=10,lat=17.5)'
'run cbar'
'draw title olr filter(8d_17d,10N-17.5N.ave)-80E 140E Sep.-Oct.'
'print' 
'c'
'set clevs -60 -50 -40 -30 -20 -10 0 10 20 30 40 50'
'set ccols 32 31 30 29 28 27 26 38 37 36 35 34 33'
'set t 274 304'
'set lat 18'
'set lon 80 140'
'd ave(olr,lat=10,lat=17.5)'
'run cbar'
'draw title olr filter(8d_17d 10N-17.5N.ave) -80E 140E Oct.'
'print' 
'c'
'set clevs -60 -50 -40 -30 -20 -10 0 10 20 30 40 50'
'set ccols 32 31 30 29 28 27 26 38 37 36 35 34 33'
'set t 305 334'
'set lat 18'
'set lon 80 140'
'd ave(olr,lat=10,lat=17.5)'
'run cbar'
'draw title olr filter(8d_17d,10N-17.5N.ave)-80E 140E Nov.'
'print' 
'disable print'
;

