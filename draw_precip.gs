'reinit'
'sdfopen F:\reanalysis\CMAP\precip.mon.mean.nc'
'sdfopen F:\reanalysis\CMAP\precip.mon.ltm.nc'
'enable print F:\reanalysis\img\Thailand.precip.gmf'
'set lon 95 115'
'set lat 0 25'
count =1
while count <=11
*'set dfile 2'   
*'set t 'count
*'k = precip.2'
*'set dfile 1'    
'set t 'count+384
'set gxout shaded'
*'set cmin 0'
*'set cint 2'
*'d precip-k'
'd precip'
'run cbar'
'set gxout contour'
*'set cint 2'
*'d precip-k'
'd precip'
*'draw title 2011/'count 'precip.ano'
'draw title 2011/'count ' precip'
'print'
'c'
count=count+1
endwhile
'disable print'
;