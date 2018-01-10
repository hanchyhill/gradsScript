'reinit'
'open F:\reanalysis\output_2\olr.32-48.ff.trans.ctl'
'open F:\reanalysis\output_2\olr.32-48.fb.trans.ctl'
'set lat 20'
'set lon 110'
k=1
while(k<364)
'set t 'k
'd aave(olr,lon=100,lon=102.5,lat=12.5,lat=15)'
'grads2ascii aave(olr,lon=100,lon=102.5,lat=12.5,lat=15)  F:\reanalysis\output_2\(100-102.5)E_(12.5-15)N.ff.txt a %8.0f 144 1'
'grads2ascii aave(olr.2,lon=100,lon=102.5,lat=12.5,lat=15)  F:\reanalysis\output_2\(100-102.5)E_(12.5-15)N.fb.txt a %8.0f 144 1'
k=k+1
endwhile
;