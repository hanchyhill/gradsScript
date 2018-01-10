'sdfopen F:\reanalysis\reanalysis_2\uwnd.2011.nc'
'sdfopen F:\reanalysis\reanalysis_2\vwnd.2011.nc'
'sdfopen F:\reanalysis\reanalysis_2\pr_wtr.eatm.2011.nc'
'set lon 50 140'
'set lat -20 30'
'enable print F:\reanalysis\img\wind201112.gmf'
i = 315
while(i<=325)
'set dfile 3'
'set lon 50 140'
'set lat -20 30'
'set z 1'
'set t ' i
'set gxout shaded '
'set cmin 40'
'd pr_wtr.3'
'set gxout contour '
'd pr_wtr.3'
'set dfile 1'
'set gxout vector'
'set rbcols auto'
'set lon 50 140'
'set lat -20 30'
'set lev 850 '
'set t ' i
'd uwnd.1;vwnd.2'
'print'
'c'
i = i+1
endwhile
'disable print'
;