'reinit'
'open F:\reanalysis\output\filter2\uwnd200.filter(8t_17t)_-15-30_60-150.ctl'
'open F:\reanalysis\output\filter2\vwnd200.filter(8t_17t)_-15-30_60-150.ctl'
'open F:\reanalysis\output\filter2\omega500.filter(8t_17t)_-15-30_60-150.ctl'
'set grid off'
*'set lon 70 150'
*'set dfile 1'
*182/213/244/274/305/335

*'set lon 60 150'
*'set lat -10 30'

mon = Sep
inti = 244
days = 30
'set t 'inti
*
'enable print F:\reanalysis\img\final\filter(8d_17d)wind200_omega.500_'mon'.gmf'
k=0
while(k<days)
'set gxout shaded'
'set grads off'
'set cmax 0'
*'set cint 10'
'set xlopts 1 4  0.17'
'set ylopts 1 4  0.16'
'set t 'inti+k
'd omega.3*100'
*'cbarn 1 0 5.48 1.14'
'cbarn'
'set gxout contour'
*'set cint 20'
'd omega.3*100'
'set ccolor 1'
'set arrowhead 0.12'
'd uwnd;vwnd.2'
'draw title (2-7d period)wind200&omega.500 'mon' 'k+1 
'print'
'c'
k=k+1
endwhile
'disable print'
;

