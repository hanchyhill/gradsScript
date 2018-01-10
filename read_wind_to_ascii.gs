'reinit'
*'sdfopen F:\reanalysis\reanalysis_2\uwnd.2011.nc'
'sdfopen F:\reanalysis\reanalysis_2\uwnd.mon.mean.nc'
*'sdfopen F:\reanalysis\other\olr.day.mean.nc'
*'sdfopen F:\reanalysis\other\olr.day.ltm.nc'
*'set gxout fwrite'
*'set fwrite F:\reanalysis\olr_2011_07_02.dat'
* July01 set t 13545 182 ;Dec31 13728 14153
*init=13180
init2 = 373
days =36
k=0
'set lon 110'
'set z 3'
'set lat 17.5'
*while(k<days)
'set dfile 1'
*'set t 'init + k
'set t 'init2 + k' 'init2+days-1
'grads2ascii uwnd F:\reanalysis\script\mon.uwnd.2010_2012.txt n %8.0f 'days' 1'
*'d dayolr'
*'set dfile 2'
*'set t 'init2 + k' 'init2+days-1
*'grads2ascii olr.2 F:\reanalysis\script\ltm.olr.2010_08_10.txt n %8.0f 'days' 1'
*'ano = dayolr-olr.2'
*k=k+1
*endwhile
*'disable fwrite'
;
