'sdfopen F:\reanalysis\other\shum.mon.mean.nc'
'set lon 50 140'
'set lat -15 25'
'set z 2'
'enable print F:\reanalysis\img\q_mean.gmf'
'set gxout shaded' 
'set cint 0.5 '
'set cmin 13.5'
'd ave(shum,t=766,t=768)'
'run cbar.gs'
'print'
'set gxout contour' 
'set cint 1 '
'd ave(shum,t=766,t=768)'
'print'
'c'
'set gxout shaded' 
'set cint 0.5 '
'set cmin 13.5'
'd ave(shum,t=706,t=708)'
'run cbar.gs'
'print'
'set gxout contour' 
'set cint 1'
'd ave(shum,t=706,t=708)'
'print'
'c'
'k1 = ave(shum,t=10,t=790,12)'
'k2 = ave(shum,t=11,t=791,12)'
'k3 = ave(shum,t=12,t=792,12)'
'kmean = (k1+k2+k3)/3.0'
'set gxout shaded' 
'set cint 0.5 '
'set cmin 13.5'
'd 'kmean
'run cbar.gs'
'print'
'set gxout contour' 
'set cint 1'
'd 'kmean
'print'
'c'
'disable print'
;