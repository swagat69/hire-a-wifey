# Crops and resizes sourced photography to the exact aspect ratios the
# layout expects (spec §37), writing into /public/images.
#
# Source photos live in a scratch folder passed as -Source. Re-run this
# after dropping in the real shoot — keep the same output names and the
# layout needs no changes.

param(
  [Parameter(Mandatory = $true)][string]$Source
)

Add-Type -AssemblyName System.Drawing

$out = Join-Path $PSScriptRoot "..\public\images"
New-Item -ItemType Directory -Force $out | Out-Null

# focalY: where the subject sits vertically, 0 = top, 1 = bottom. Portrait
# crops out of landscape sources cut heads off at 0.5, so people shots sit
# higher.
$targets = @(
  @{ name = "hero-folding-laundry"; w = 1200; h = 1230; focalY = 0.42 },
  @{ name = "todo-household-reset"; w = 1040; h = 1080; focalY = 0.45 },
  @{ name = "difference-laundry";   w = 1000; h = 1250; focalY = 0.44 },
  @{ name = "difference-kitchen";   w = 1000; h = 1250; focalY = 0.46 },
  @{ name = "who-families";         w = 1000; h = 1250; focalY = 0.40 },
  @{ name = "who-professional";     w = 1000; h = 1250; focalY = 0.44 },
  @{ name = "who-seniors";          w = 1000; h = 1250; focalY = 0.40 },
  @{ name = "time-back-beach";      w = 1920; h = 1200; focalY = 0.50 },
  @{ name = "recruitment-wifey";    w = 1000; h = 1250; focalY = 0.36 }
)

$enc = [System.Drawing.Imaging.ImageCodecInfo]::GetImageEncoders() |
  Where-Object { $_.MimeType -eq "image/jpeg" }
$params = New-Object System.Drawing.Imaging.EncoderParameters(1)
$params.Param[0] = New-Object System.Drawing.Imaging.EncoderParameter(
  [System.Drawing.Imaging.Encoder]::Quality, 84)

foreach ($t in $targets) {
  $inPath = Join-Path $Source "$($t.name).jpg"
  if (-not (Test-Path $inPath)) { Write-Output "skip $($t.name) (missing)"; continue }

  $src = [System.Drawing.Bitmap]::FromFile($inPath)

  # Cover-fit: scale so the source fills the frame, then crop the overflow.
  $scale = [Math]::Max($t.w / $src.Width, $t.h / $src.Height)
  $sw = [int][Math]::Ceiling($src.Width * $scale)
  $sh = [int][Math]::Ceiling($src.Height * $scale)
  $ox = [int](($t.w - $sw) / 2)
  $oy = [int](($t.h - $sh) * $t.focalY)

  $dst = New-Object System.Drawing.Bitmap($t.w, $t.h)
  $g = [System.Drawing.Graphics]::FromImage($dst)
  $g.InterpolationMode = "HighQualityBicubic"
  $g.PixelOffsetMode = "HighQuality"
  $g.SmoothingMode = "HighQuality"
  $g.DrawImage($src, $ox, $oy, $sw, $sh)
  $g.Dispose()

  $dst.Save((Join-Path $out "$($t.name).jpg"), $enc, $params)
  $dst.Dispose(); $src.Dispose()

  Write-Output "$($t.name).jpg  $($t.w)x$($t.h)"
}
