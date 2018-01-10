'reinit'
*'open F:\reanalysis\output_3\olr.filter(2t_7t)_0-360.ctl'
'sdfopen F:\reanalysis\other\olr.day.ltm.nc'
*'sdfopen F:\reanalysis\other\olr.day.mean.nc'
*init = 13364
init = 1
'set lon 110'
'set lat 20'
'set t 'init ' 'init+364
*'set t 'init ' 'init+364
*'grads2ascii olr F:\reanalysis\olr(2d-7d)_110E_20N.txt n %g 1 1'
'grads2ascii olr F:\reanalysis\olr.ltm_110E_20N.txt n %g 1 1'
;