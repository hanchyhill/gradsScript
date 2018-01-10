'reinit'
'set gxout fwrite'
*'sdfopen F:\reanalysis\other\olr.day.mean.nc'
'sdfopen F:\reanalysis\other\olr.day.ltm.nc'
*'set fwrite F:\reanalysis\output\olr.2011_-15-25_60-150.dat'
'set fwrite F:\reanalysis\output\olr.ltm-15-25_60-150.dat'
'set lat -15 25'
'set lon 60 150'
init = 1
days=365
i=0
while(i<days)
'set  t 'init+i
'd olr'
say i
i=i+1
endwhile
'disable fwrite'
;