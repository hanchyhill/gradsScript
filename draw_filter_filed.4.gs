'reinit'
'open F:\reanalysis\output_3\uwund(200hPa).filter(2t_7t)_0-360.ctl'
'open F:\reanalysis\output_3\vwund(200hPa).filter(2t_7t)_0-360.ctl'
'open F:\reanalysis\output_3\omega.filter(2t_7t)_0-360.ctl'
*'set dfile 1'
*182/213/244/274/305/335
'set lon 60 170'
'set lat -10 30'

mon = Sep
inti = 244
days = 30
'set t 'inti
*
'enable print F:\reanalysis\output_3\filter(2-7)\filter(2d_7d)wind200_omega.500_'mon'.gmf'
k=0
while(k<days)
'set gxout shaded'
'set cmax 0'
*'set cint 10'
'set t 'inti+k
'd omega.3'
'run cbar.gs'
'set gxout contour'
*'set cint 20'
'd omega.3'
'set ccolor 1'
'd uwnd;vwnd.2'
'draw title (2-7d period)wind200&omega.500 'mon' 'k+1 
'print'
'c'
k=k+1
endwhile
'disable print'
;
