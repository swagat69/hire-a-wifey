# Generates neutral warm placeholders at the exact aspect ratios from the
# design spec (§37) so layout can be judged before real photography lands.
# Replace each file in /public/images with the real shot at the same name
# and ratio — no code changes needed.

Add-Type -AssemblyName System.Drawing

$out = Join-Path $PSScriptRoot "..\public\images"
New-Item -ItemType Directory -Force $out | Out-Null

$specs = @(
  @{ name = "hero-folding-laundry";   w = 1200; h = 1230; label = "HERO / FOLDING LAUNDRY";     tone = 0 },
  @{ name = "todo-household-reset";   w = 1040; h = 1080; label = "TO-DO / HOUSEHOLD RESET";    tone = 1 },
  @{ name = "difference-laundry";     w = 1000; h = 1250; label = "DIFFERENCE / LAUNDRY";       tone = 0 },
  @{ name = "difference-kitchen";     w = 1000; h = 1250; label = "DIFFERENCE / KITCHEN RESET"; tone = 2 },
  @{ name = "who-families";           w = 1000; h = 1250; label = "WHO WE HELP / FAMILIES";     tone = 1 },
  @{ name = "who-professional";       w = 1000; h = 1250; label = "WHO WE HELP / PROFESSIONAL"; tone = 2 },
  @{ name = "who-seniors";            w = 1000; h = 1250; label = "WHO WE HELP / SENIORS";      tone = 0 },
  @{ name = "time-back-beach";        w = 1920; h = 1200; label = "TIME BACK / HERVEY BAY";     tone = 1 },
  @{ name = "recruitment-wifey";      w = 1000; h = 1250; label = "RECRUITMENT / WIFEY";        tone = 2 }
)

# Warm neutral pairs — deliberately desaturated so placeholders never read
# as a design decision.
$tones = @(
  @{ a = @(0xEC, 0xE6, 0xE0); b = @(0xD6, 0xCB, 0xC4) },
  @{ a = @(0xEF, 0xE9, 0xE6); b = @(0xDA, 0xC9, 0xC9) },
  @{ a = @(0xE8, 0xE4, 0xE1); b = @(0xCC, 0xC4, 0xBF) }
)

$rand = New-Object System.Random 7

foreach ($s in $specs) {
  $bmp = New-Object System.Drawing.Bitmap($s.w, $s.h)
  $g = [System.Drawing.Graphics]::FromImage($bmp)
  $g.SmoothingMode = "AntiAlias"
  $g.TextRenderingHint = "ClearTypeGridFit"

  $t = $tones[$s.tone]
  $c1 = [System.Drawing.Color]::FromArgb($t.a[0], $t.a[1], $t.a[2])
  $c2 = [System.Drawing.Color]::FromArgb($t.b[0], $t.b[1], $t.b[2])
  $rect = New-Object System.Drawing.Rectangle(0, 0, $s.w, $s.h)
  $brush = New-Object System.Drawing.Drawing2D.LinearGradientBrush($rect, $c1, $c2, 118.0)
  $g.FillRectangle($brush, $rect)

  # Faint grain so flat areas do not band.
  for ($i = 0; $i -lt ($s.w * $s.h / 260); $i++) {
    $x = $rand.Next($s.w); $y = $rand.Next($s.h)
    $v = $rand.Next(0, 22)
    $pen = New-Object System.Drawing.SolidBrush([System.Drawing.Color]::FromArgb($v, 90, 78, 74))
    $g.FillRectangle($pen, $x, $y, 2, 2)
    $pen.Dispose()
  }

  # Centre rule + label
  $fontSize = [Math]::Max(13, [int]($s.w / 52))
  $font = New-Object System.Drawing.Font("Segoe UI", $fontSize, [System.Drawing.FontStyle]::Bold)
  $fg = New-Object System.Drawing.SolidBrush([System.Drawing.Color]::FromArgb(120, 60, 50, 48))
  $fmt = New-Object System.Drawing.StringFormat
  $fmt.Alignment = "Center"
  $fmt.LineAlignment = "Center"
  $text = ($s.label.ToCharArray() -join " ")
  $g.DrawString($text, $font, $fg, (New-Object System.Drawing.RectangleF(0, 0, $s.w, $s.h)), $fmt)

  $linePen = New-Object System.Drawing.Pen([System.Drawing.Color]::FromArgb(46, 60, 50, 48), 1.0)
  $g.DrawRectangle($linePen, 0, 0, $s.w - 1, $s.h - 1)

  $enc = [System.Drawing.Imaging.ImageCodecInfo]::GetImageEncoders() | Where-Object { $_.MimeType -eq "image/jpeg" }
  $ps = New-Object System.Drawing.Imaging.EncoderParameters(1)
  $ps.Param[0] = New-Object System.Drawing.Imaging.EncoderParameter([System.Drawing.Imaging.Encoder]::Quality, 82)
  $bmp.Save((Join-Path $out "$($s.name).jpg"), $enc, $ps)

  $g.Dispose(); $bmp.Dispose(); $brush.Dispose(); $font.Dispose(); $fg.Dispose(); $linePen.Dispose()
  Write-Output "$($s.name).jpg  $($s.w)x$($s.h)"
}
