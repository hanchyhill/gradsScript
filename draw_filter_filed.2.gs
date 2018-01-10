'reinit'
'open F:\reanalysis\output\filter2\uwnd200.filter(8t_17t)_-15-30_60-150.ctl'
'open F:\reanalysis\output\filter2\vwnd200.filter(8t_17t)_-15-30_60-150.ctl'
'open F:\reanalysis\output\filter2\omega500.filter(8t_17t)_-15-30_60-150.ctl'
*'set dfile 1'
*182/213/244/274/305/335
mon = July
inti = 182
days = 31
'set t 'inti
*
'enable print F:\reanalysis\img\filter_2\filter(8-17)_wind200_omega.500_'mon'.gmf'
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
'draw title (8-17d period)wind200&omega.500 'mon' 'k+1 
'print'
'c'
k=k+1
endwhile
'disable print'
;
