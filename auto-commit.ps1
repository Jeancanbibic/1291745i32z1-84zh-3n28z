while ($true) {
    # Status überprüfen
    $status = git status --porcelain
    
    if ($status) {
        Write-Host "Änderungen gefunden. Führe Commit und Push durch..."
        
        # Alle Änderungen hinzufügen
        git add .
        
        # Commit mit Zeitstempel
        $timestamp = Get-Date -Format "yyyy-MM-dd HH:mm:ss"
        git commit -m "Auto-Commit: $timestamp"
        
        # Push zu GitHub
        git push
        
        Write-Host "Änderungen wurden hochgeladen."
    }
    
    # 30 Sekunden warten
    Write-Host "Warte 30 Sekunden..."
    Start-Sleep -Seconds 30
} 