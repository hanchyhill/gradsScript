'reinit'
'open F:\reanalysis\output\filter2\olr.filter(35t_90t)_-15-30_60-150.ctl'
*'open F:\reanalysis\output\olr.filter(60t_80t)_-15-25_60-150.ctl'
*'open F:\reanalysis\output\filter2\olr.filter(8t_17t)_-15-30_60-150.ctl'


*p1
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
*'set clevs -30 -25 -20 -15 -10 -5 0 5 10 15 20 25'
*'set ccols 32 31 30 29 28 27 26 38 37 36 35 34 33'
'set clevs -30 -25 -20 -15 -10 -5 0 '
'set ccols 32 31 30 29 28 27 26 0'
'set lon 110'
'set lat 0 30'
'set grads off'
'set grid off'
   'set parea 1 10 1 6.5'
   'set  xlopts -20';'set  ylopts -20'
'set t 52 365'
*'set t 182 334'
'set xyrev on'
'set gxout shaded'
'set csmooth on'
*'d olr'
'd ave(olr,lon=107.5,lon=112.5)'
'run cbarn'
'draw title olr filter(35d_90d,107.5-112.5E) 0- 30N'

'set gxout contour'
'set clab off'
'set clopts 1'
*'set clevs  5 10 15 20 25'
*'set ccols 37 36 35 34 33'
'set cint 20'
'set lon 110'
'set lat 0 30'
'set grads off'
'set grid off'
'set  xlopts -20';'set  ylopts -20'
'set t 52 365'
*'set t 182 334'
'set xyrev on'
'set csmooth on'
*'d olr'
'd ave(olr,lon=107.5,lon=112.5)'

'run axis.gs -type b  -position o -start 52 -end 365 -tformat md -label on -interval 30 -lsize 0.16 -voffset -0.1'
'run axis.gs -type L  -position o -start 0 -end 30 -lsize 0.16'
'gxprint F:\reanalysis\img\new_new\new_H_olr.filter.3.(30t_90t)p1.pdf white'
'c'

*p2
*'set clevs -30 -25 -20 -15 -10 -5 0 5 10 15 20 25'
*'set ccols 32 31 30 29 28 27 26 38 37 36 35 34 33'
'set gxout shaded'
'set clevs -30 -25 -20 -15 -10 -5 0'
'set ccols 32 31 30 29 28 27 26 0'
'set t 152 365'
'set lat 18'
'set lon 60 150'
'set grads off'
'set grid off'
   'set  xlopts -20';'set  ylopts -20'
'set csmooth on'
'd ave(olr,lat=15,lat=20)'
'run cbarn 1 0 5.82 0.36'
*'run cbarn 1 1'
'draw title olr filter(35d_90d,15N-20N.ave)-60E 150E'

'set gxout contour'
*'set clevs 5 10 15 20 25'
*'set ccols 37 36 35 34 33'
'set lat 18'
'set lon 60 150'
'set clab off'
'set cint 10'
'set clopts 1'
'set csmooth on'
*'set clevs  5 10 15 20 25'
*'set ccols 37 36 35 34 33'

'd ave(olr,lat=15,lat=20)'
'run axis.gs -type L  -position o -start 152 -end 365 -tformat md -interval 30 -lsize 0.16 -hoffset -0.2'
'run axis.gs -type b  -position o -start 60 -interval 10 -end 150 -lsize 0.16'
'gxprint F:\reanalysis\img\new_new\new_H_olr.filter.3.(30t_90t)p2.pdf white'
;

