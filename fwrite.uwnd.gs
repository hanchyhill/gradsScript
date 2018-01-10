'reinit'
'set gxout fwrite'
*'sdfopen F:\reanalysis\other\olr.day.mean.nc'
*'sdfopen F:\reanalysis\other\olr.day.ltm.nc'
'sdfopen F:\reanalysis\reanalysis_2\uwnd.2011.nc'
*'sdfopen F:\reanalysis\reanalysis_2\omega.2011.nc'
*'set fwrite F:\reanalysis\output_2\olr.2011.dat'
'set fwrite F:\reanalysis\output_2\uwund(200hPa).2011_0_360.dat'
*'set fwrite F:\reanalysis\output_2\omega.2011_0_360.dat'
'set lat -90 90'
'set lon 0 360'
*'set z 3'
'set lev 200'
*init = 13364
init = 1
days=365
i=0
while(i<days)
'set  t 'init+i
*'d olr'
'd uwnd'
*'d vwnd'
say i
i=i+1
endwhile
'disable fwrite'
;