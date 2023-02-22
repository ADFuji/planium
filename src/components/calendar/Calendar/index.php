<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <link rel="stylesheet" href="calendar.css">
    <link rel="stylesheet" href="header.css">
    <link rel="stylesheet" href="month.css">
    <link rel="stylesheet" href="week.css">
    <link rel="stylesheet" href="day.css">
</head>
<style>
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        font-family: 'arial';
    }
</style>
<body>
        <div class="calendar">
            <div class="header">
                <div class="controls">
                    <span>February 2023</span>
                    <div class="selectors">
                        <div class="button"><span><</span></div>
                        <div class="button"><span>Today</span></div>
                        <div class="button"><span>></span></div>
                    </div>
                </div>
                <div class="days">
                    <div class="day_">Mon.</div>
                    <div class="day_">Tue.</div>
                    <div class="day_">Wed.</div>
                    <div class="day_">Thu.</div>
                    <div class="day_">Fri.</div>
                    <div class="day_">Sat.</div>
                    <div class="day_">Sun.</div>
                </div>
            </div>
            <div class="month">
                <?php
                    $TODAY = 22;
                    $DAYS = 28;
                    $FIRST = 2;
                    for ($i = 0; $i <= 4; $i++) {
                        echo '<div class="week">';
                        for ($j = 0; $j <= 6; $j++) {
                            $day = $i * 7 + $j;
                            $hasEvent = (( $i * 7 + $j)%3)==0;
                            if ($day < $FIRST || $day >= $FIRST + $DAYS) {
                                echo '<div class="day"></div>';
                            } else {
                                $day = $day - $FIRST + 1;
                                if ($day == $TODAY) {
                                    echo '<div class="day t"><span class="today d">' . $day . '</span><span class=' . ($hasEvent?"event":"noevent") . "></span></div>";
                                } else {
                                    echo '<div class="day t"><span class="d">' . $day . '</span><span class=' . ($hasEvent?"event":"noevent") . "></span></div>";
                                }
                            }
                        }
                        echo '</div>';
                    }
                ?>
            </div>
        </div>

</body>
</html>