'sdfopen F:\reanalysis\other\precip.mon.anom(1).nc'
'set lon 50 140'
'set lat -20 30'
'enable print F:\reanalysis\img\pre03.gmf'
i = 705
while(i<=710)
'set gxout shaded' 
'set cint 1 '
'set cmin 0'
'set t ' i
'd precip'
'run cbar.gs'
'print'
'set gxout contour' 
'set cint 1 '
'd precip'
'print'
'c'
i = i+1
endwhile
'disable print'
;