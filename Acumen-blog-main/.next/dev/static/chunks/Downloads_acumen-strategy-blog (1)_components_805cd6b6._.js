(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/Downloads/acumen-strategy-blog (1)/components/hero-3d.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Hero3D",
    ()=>Hero3D
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$acumen$2d$strategy$2d$blog__$28$1$292f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/acumen-strategy-blog (1)/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$acumen$2d$strategy$2d$blog__$28$1$292f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/acumen-strategy-blog (1)/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$acumen$2d$strategy$2d$blog__$28$1$292f$node_modules$2f40$react$2d$three$2f$fiber$2f$dist$2f$react$2d$three$2d$fiber$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/Downloads/acumen-strategy-blog (1)/node_modules/@react-three/fiber/dist/react-three-fiber.esm.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$acumen$2d$strategy$2d$blog__$28$1$292f$node_modules$2f40$react$2d$three$2f$fiber$2f$dist$2f$events$2d$1eccaf1c$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__D__as__useFrame$3e$__ = __turbopack_context__.i("[project]/Downloads/acumen-strategy-blog (1)/node_modules/@react-three/fiber/dist/events-1eccaf1c.esm.js [app-client] (ecmascript) <export D as useFrame>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$acumen$2d$strategy$2d$blog__$28$1$292f$node_modules$2f40$react$2d$three$2f$drei$2f$core$2f$OrbitControls$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/acumen-strategy-blog (1)/node_modules/@react-three/drei/core/OrbitControls.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$acumen$2d$strategy$2d$blog__$28$1$292f$node_modules$2f40$react$2d$three$2f$drei$2f$core$2f$Float$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/acumen-strategy-blog (1)/node_modules/@react-three/drei/core/Float.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$acumen$2d$strategy$2d$blog__$28$1$292f$node_modules$2f40$react$2d$three$2f$drei$2f$core$2f$Text3D$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/acumen-strategy-blog (1)/node_modules/@react-three/drei/core/Text3D.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$acumen$2d$strategy$2d$blog__$28$1$292f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/acumen-strategy-blog (1)/node_modules/three/build/three.core.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature(), _s1 = __turbopack_context__.k.signature(), _s2 = __turbopack_context__.k.signature(), _s3 = __turbopack_context__.k.signature();
"use client";
;
;
;
;
// Service node data matching Acumen's ecosystem
const services = [
    {
        name: "Strategy",
        color: "#0A2463",
        position: [
            0,
            2,
            0
        ]
    },
    {
        name: "Labs",
        color: "#00D4AA",
        position: [
            2,
            1,
            1
        ]
    },
    {
        name: "Glynac",
        color: "#0066CC",
        position: [
            -2,
            1,
            1
        ]
    },
    {
        name: "PHH",
        color: "#E2725B",
        position: [
            2,
            -1,
            -1
        ]
    },
    {
        name: "Tollbooth",
        color: "#00C49A",
        position: [
            -2,
            -1,
            -1
        ]
    },
    {
        name: "Talent",
        color: "#7B68EE",
        position: [
            0,
            -2,
            0
        ]
    }
];
function ServiceNode({ position, color, name }) {
    _s();
    const meshRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$acumen$2d$strategy$2d$blog__$28$1$292f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const [hovered, setHovered] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$acumen$2d$strategy$2d$blog__$28$1$292f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$acumen$2d$strategy$2d$blog__$28$1$292f$node_modules$2f40$react$2d$three$2f$fiber$2f$dist$2f$events$2d$1eccaf1c$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__D__as__useFrame$3e$__["useFrame"])({
        "ServiceNode.useFrame": (state)=>{
            if (meshRef.current) {
                meshRef.current.rotation.x = Math.sin(state.clock.elapsedTime * 0.3) * 0.1;
                meshRef.current.rotation.y += 0.01;
            }
        }
    }["ServiceNode.useFrame"]);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$acumen$2d$strategy$2d$blog__$28$1$292f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$acumen$2d$strategy$2d$blog__$28$1$292f$node_modules$2f40$react$2d$three$2f$drei$2f$core$2f$Float$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Float"], {
        speed: 2,
        rotationIntensity: 0.5,
        floatIntensity: 0.5,
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$acumen$2d$strategy$2d$blog__$28$1$292f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("mesh", {
            ref: meshRef,
            position: position,
            onPointerEnter: ()=>setHovered(true),
            onPointerLeave: ()=>setHovered(false),
            scale: hovered ? 1.2 : 1,
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$acumen$2d$strategy$2d$blog__$28$1$292f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("octahedronGeometry", {
                    args: [
                        0.5,
                        0
                    ]
                }, void 0, false, {
                    fileName: "[project]/Downloads/acumen-strategy-blog (1)/components/hero-3d.tsx",
                    lineNumber: 38,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$acumen$2d$strategy$2d$blog__$28$1$292f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("meshStandardMaterial", {
                    color: color,
                    emissive: color,
                    emissiveIntensity: hovered ? 0.5 : 0.2,
                    metalness: 0.8,
                    roughness: 0.2
                }, void 0, false, {
                    fileName: "[project]/Downloads/acumen-strategy-blog (1)/components/hero-3d.tsx",
                    lineNumber: 39,
                    columnNumber: 9
                }, this),
                hovered && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$acumen$2d$strategy$2d$blog__$28$1$292f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$acumen$2d$strategy$2d$blog__$28$1$292f$node_modules$2f40$react$2d$three$2f$drei$2f$core$2f$Text3D$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Text3D"], {
                    font: "/fonts/inter_bold.json",
                    size: 0.2,
                    height: 0.05,
                    position: [
                        0,
                        0.8,
                        0
                    ],
                    children: [
                        name,
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$acumen$2d$strategy$2d$blog__$28$1$292f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("meshStandardMaterial", {
                            color: "#ffffff"
                        }, void 0, false, {
                            fileName: "[project]/Downloads/acumen-strategy-blog (1)/components/hero-3d.tsx",
                            lineNumber: 49,
                            columnNumber: 13
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/Downloads/acumen-strategy-blog (1)/components/hero-3d.tsx",
                    lineNumber: 47,
                    columnNumber: 11
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/Downloads/acumen-strategy-blog (1)/components/hero-3d.tsx",
            lineNumber: 31,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/Downloads/acumen-strategy-blog (1)/components/hero-3d.tsx",
        lineNumber: 30,
        columnNumber: 5
    }, this);
}
_s(ServiceNode, "rCuBNwiPTBvDhn0zdAl8mX8eeeM=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$acumen$2d$strategy$2d$blog__$28$1$292f$node_modules$2f40$react$2d$three$2f$fiber$2f$dist$2f$events$2d$1eccaf1c$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__D__as__useFrame$3e$__["useFrame"]
    ];
});
_c = ServiceNode;
function ConnectionLines() {
    _s1();
    const linesRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$acumen$2d$strategy$2d$blog__$28$1$292f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$acumen$2d$strategy$2d$blog__$28$1$292f$node_modules$2f40$react$2d$three$2f$fiber$2f$dist$2f$events$2d$1eccaf1c$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__D__as__useFrame$3e$__["useFrame"])({
        "ConnectionLines.useFrame": (state)=>{
            if (linesRef.current) {
                linesRef.current.rotation.y = Math.sin(state.clock.elapsedTime * 0.1) * 0.2;
            }
        }
    }["ConnectionLines.useFrame"]);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$acumen$2d$strategy$2d$blog__$28$1$292f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("group", {
        ref: linesRef,
        children: services.map((service, i)=>services.slice(i + 1).map((target, j)=>{
                const points = [
                    new __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$acumen$2d$strategy$2d$blog__$28$1$292f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Vector3"](...service.position),
                    new __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$acumen$2d$strategy$2d$blog__$28$1$292f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Vector3"](...target.position)
                ];
                const geometry = new __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$acumen$2d$strategy$2d$blog__$28$1$292f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["BufferGeometry"]().setFromPoints(points);
                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$acumen$2d$strategy$2d$blog__$28$1$292f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("line", {
                    geometry: geometry,
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$acumen$2d$strategy$2d$blog__$28$1$292f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("lineBasicMaterial", {
                        color: "#00D4AA",
                        opacity: 0.3,
                        transparent: true
                    }, void 0, false, {
                        fileName: "[project]/Downloads/acumen-strategy-blog (1)/components/hero-3d.tsx",
                        lineNumber: 75,
                        columnNumber: 15
                    }, this)
                }, `${i}-${j}`, false, {
                    fileName: "[project]/Downloads/acumen-strategy-blog (1)/components/hero-3d.tsx",
                    lineNumber: 74,
                    columnNumber: 13
                }, this);
            }))
    }, void 0, false, {
        fileName: "[project]/Downloads/acumen-strategy-blog (1)/components/hero-3d.tsx",
        lineNumber: 67,
        columnNumber: 5
    }, this);
}
_s1(ConnectionLines, "9SkcolVjYNRQ2iD3CvKknokVkFw=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$acumen$2d$strategy$2d$blog__$28$1$292f$node_modules$2f40$react$2d$three$2f$fiber$2f$dist$2f$events$2d$1eccaf1c$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__D__as__useFrame$3e$__["useFrame"]
    ];
});
_c1 = ConnectionLines;
function ParticleField() {
    _s2();
    const particlesRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$acumen$2d$strategy$2d$blog__$28$1$292f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$acumen$2d$strategy$2d$blog__$28$1$292f$node_modules$2f40$react$2d$three$2f$fiber$2f$dist$2f$events$2d$1eccaf1c$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__D__as__useFrame$3e$__["useFrame"])({
        "ParticleField.useFrame": (state)=>{
            if (particlesRef.current) {
                particlesRef.current.rotation.y += 0.0005;
                const positions = particlesRef.current.geometry.attributes.position.array;
                for(let i = 1; i < positions.length; i += 3){
                    positions[i] += Math.sin(state.clock.elapsedTime * 0.5 + i) * 0.001;
                }
                particlesRef.current.geometry.attributes.position.needsUpdate = true;
            }
        }
    }["ParticleField.useFrame"]);
    const particleCount = 1000;
    const positions = new Float32Array(particleCount * 3);
    for(let i = 0; i < particleCount; i++){
        positions[i * 3] = (Math.random() - 0.5) * 20;
        positions[i * 3 + 1] = (Math.random() - 0.5) * 20;
        positions[i * 3 + 2] = (Math.random() - 0.5) * 20;
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$acumen$2d$strategy$2d$blog__$28$1$292f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("points", {
        ref: particlesRef,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$acumen$2d$strategy$2d$blog__$28$1$292f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("bufferGeometry", {
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$acumen$2d$strategy$2d$blog__$28$1$292f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("bufferAttribute", {
                    attach: "attributes-position",
                    count: particleCount,
                    array: positions,
                    itemSize: 3
                }, void 0, false, {
                    fileName: "[project]/Downloads/acumen-strategy-blog (1)/components/hero-3d.tsx",
                    lineNumber: 110,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/Downloads/acumen-strategy-blog (1)/components/hero-3d.tsx",
                lineNumber: 109,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$acumen$2d$strategy$2d$blog__$28$1$292f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("pointsMaterial", {
                size: 0.05,
                color: "#00D4AA",
                transparent: true,
                opacity: 0.6
            }, void 0, false, {
                fileName: "[project]/Downloads/acumen-strategy-blog (1)/components/hero-3d.tsx",
                lineNumber: 112,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/Downloads/acumen-strategy-blog (1)/components/hero-3d.tsx",
        lineNumber: 108,
        columnNumber: 5
    }, this);
}
_s2(ParticleField, "nyoGzy6YD2rRIe6CSEyQKrNyblA=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$acumen$2d$strategy$2d$blog__$28$1$292f$node_modules$2f40$react$2d$three$2f$fiber$2f$dist$2f$events$2d$1eccaf1c$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__D__as__useFrame$3e$__["useFrame"]
    ];
});
_c2 = ParticleField;
function Scene() {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$acumen$2d$strategy$2d$blog__$28$1$292f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$acumen$2d$strategy$2d$blog__$28$1$292f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$acumen$2d$strategy$2d$blog__$28$1$292f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("ambientLight", {
                intensity: 0.5
            }, void 0, false, {
                fileName: "[project]/Downloads/acumen-strategy-blog (1)/components/hero-3d.tsx",
                lineNumber: 120,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$acumen$2d$strategy$2d$blog__$28$1$292f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("pointLight", {
                position: [
                    10,
                    10,
                    10
                ],
                intensity: 1
            }, void 0, false, {
                fileName: "[project]/Downloads/acumen-strategy-blog (1)/components/hero-3d.tsx",
                lineNumber: 121,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$acumen$2d$strategy$2d$blog__$28$1$292f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("pointLight", {
                position: [
                    -10,
                    -10,
                    -10
                ],
                intensity: 0.5,
                color: "#00D4AA"
            }, void 0, false, {
                fileName: "[project]/Downloads/acumen-strategy-blog (1)/components/hero-3d.tsx",
                lineNumber: 122,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$acumen$2d$strategy$2d$blog__$28$1$292f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(ParticleField, {}, void 0, false, {
                fileName: "[project]/Downloads/acumen-strategy-blog (1)/components/hero-3d.tsx",
                lineNumber: 124,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$acumen$2d$strategy$2d$blog__$28$1$292f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(ConnectionLines, {}, void 0, false, {
                fileName: "[project]/Downloads/acumen-strategy-blog (1)/components/hero-3d.tsx",
                lineNumber: 125,
                columnNumber: 7
            }, this),
            services.map((service, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$acumen$2d$strategy$2d$blog__$28$1$292f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(ServiceNode, {
                    ...service
                }, i, false, {
                    fileName: "[project]/Downloads/acumen-strategy-blog (1)/components/hero-3d.tsx",
                    lineNumber: 128,
                    columnNumber: 9
                }, this)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$acumen$2d$strategy$2d$blog__$28$1$292f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$acumen$2d$strategy$2d$blog__$28$1$292f$node_modules$2f40$react$2d$three$2f$drei$2f$core$2f$OrbitControls$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["OrbitControls"], {
                enableZoom: false,
                enablePan: false,
                autoRotate: true,
                autoRotateSpeed: 0.5
            }, void 0, false, {
                fileName: "[project]/Downloads/acumen-strategy-blog (1)/components/hero-3d.tsx",
                lineNumber: 131,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true);
}
_c3 = Scene;
function Hero3D() {
    _s3();
    const [currentPhrase, setCurrentPhrase] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$acumen$2d$strategy$2d$blog__$28$1$292f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(0);
    const phrases = [
        "Strategic Advisory, Technology, and Distribution Solutions",
        "Diagnose Challenges. Design Roadmaps. Deploy Solutions.",
        "From Strategy → Execution → Scale"
    ];
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$acumen$2d$strategy$2d$blog__$28$1$292f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "Hero3D.useEffect": ()=>{
            const interval = setInterval({
                "Hero3D.useEffect.interval": ()=>{
                    setCurrentPhrase({
                        "Hero3D.useEffect.interval": (prev)=>(prev + 1) % phrases.length
                    }["Hero3D.useEffect.interval"]);
                }
            }["Hero3D.useEffect.interval"], 4000);
            return ({
                "Hero3D.useEffect": ()=>clearInterval(interval)
            })["Hero3D.useEffect"];
        }
    }["Hero3D.useEffect"], []);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$acumen$2d$strategy$2d$blog__$28$1$292f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "relative w-full h-screen bg-gradient-to-br from-[#0A2463] via-[#1a1a2e] to-[#0A2463]",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$acumen$2d$strategy$2d$blog__$28$1$292f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "absolute inset-0",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$acumen$2d$strategy$2d$blog__$28$1$292f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$acumen$2d$strategy$2d$blog__$28$1$292f$node_modules$2f40$react$2d$three$2f$fiber$2f$dist$2f$react$2d$three$2d$fiber$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["Canvas"], {
                    camera: {
                        position: [
                            0,
                            0,
                            8
                        ],
                        fov: 50
                    },
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$acumen$2d$strategy$2d$blog__$28$1$292f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Scene, {}, void 0, false, {
                        fileName: "[project]/Downloads/acumen-strategy-blog (1)/components/hero-3d.tsx",
                        lineNumber: 156,
                        columnNumber: 11
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/Downloads/acumen-strategy-blog (1)/components/hero-3d.tsx",
                    lineNumber: 155,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/Downloads/acumen-strategy-blog (1)/components/hero-3d.tsx",
                lineNumber: 154,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$acumen$2d$strategy$2d$blog__$28$1$292f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "relative z-10 flex flex-col items-center justify-center h-full px-4 text-center",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$acumen$2d$strategy$2d$blog__$28$1$292f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "max-w-5xl",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$acumen$2d$strategy$2d$blog__$28$1$292f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                                className: "text-white mb-8 animate-fade-in",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$acumen$2d$strategy$2d$blog__$28$1$292f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "block text-balance",
                                    children: phrases[currentPhrase]
                                }, void 0, false, {
                                    fileName: "[project]/Downloads/acumen-strategy-blog (1)/components/hero-3d.tsx",
                                    lineNumber: 164,
                                    columnNumber: 13
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/Downloads/acumen-strategy-blog (1)/components/hero-3d.tsx",
                                lineNumber: 163,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$acumen$2d$strategy$2d$blog__$28$1$292f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-xl md:text-2xl text-white/80 mb-12 text-pretty max-w-3xl mx-auto",
                                children: "An integrated ecosystem of advisory, technology, and distribution solutions designed to transform financial advisory practices"
                            }, void 0, false, {
                                fileName: "[project]/Downloads/acumen-strategy-blog (1)/components/hero-3d.tsx",
                                lineNumber: 167,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$acumen$2d$strategy$2d$blog__$28$1$292f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex flex-wrap gap-4 justify-center",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$acumen$2d$strategy$2d$blog__$28$1$292f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        className: "px-8 py-4 bg-[#00D4AA] hover:bg-[#00D4AA]/90 text-white font-semibold rounded transition-all hover:scale-105 hover:shadow-lg hover:shadow-[#00D4AA]/50",
                                        children: "Explore Insights"
                                    }, void 0, false, {
                                        fileName: "[project]/Downloads/acumen-strategy-blog (1)/components/hero-3d.tsx",
                                        lineNumber: 173,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$acumen$2d$strategy$2d$blog__$28$1$292f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        className: "px-8 py-4 bg-white/10 hover:bg-white/20 text-white font-semibold rounded backdrop-blur-sm border border-white/20 transition-all hover:scale-105",
                                        children: "View Ecosystem"
                                    }, void 0, false, {
                                        fileName: "[project]/Downloads/acumen-strategy-blog (1)/components/hero-3d.tsx",
                                        lineNumber: 176,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Downloads/acumen-strategy-blog (1)/components/hero-3d.tsx",
                                lineNumber: 172,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Downloads/acumen-strategy-blog (1)/components/hero-3d.tsx",
                        lineNumber: 162,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$acumen$2d$strategy$2d$blog__$28$1$292f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "absolute bottom-8 left-1/2 -translate-x-1/2",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$acumen$2d$strategy$2d$blog__$28$1$292f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "w-6 h-10 rounded-full border-2 border-white/30 flex justify-center pt-2",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$acumen$2d$strategy$2d$blog__$28$1$292f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "w-1 h-3 bg-white/50 rounded-full animate-bounce"
                            }, void 0, false, {
                                fileName: "[project]/Downloads/acumen-strategy-blog (1)/components/hero-3d.tsx",
                                lineNumber: 185,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/Downloads/acumen-strategy-blog (1)/components/hero-3d.tsx",
                            lineNumber: 184,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/Downloads/acumen-strategy-blog (1)/components/hero-3d.tsx",
                        lineNumber: 183,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/Downloads/acumen-strategy-blog (1)/components/hero-3d.tsx",
                lineNumber: 161,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/Downloads/acumen-strategy-blog (1)/components/hero-3d.tsx",
        lineNumber: 152,
        columnNumber: 5
    }, this);
}
_s3(Hero3D, "o0QLHptqPHSCoJCayhY1sij0e+o=");
_c4 = Hero3D;
var _c, _c1, _c2, _c3, _c4;
__turbopack_context__.k.register(_c, "ServiceNode");
__turbopack_context__.k.register(_c1, "ConnectionLines");
__turbopack_context__.k.register(_c2, "ParticleField");
__turbopack_context__.k.register(_c3, "Scene");
__turbopack_context__.k.register(_c4, "Hero3D");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/Downloads/acumen-strategy-blog (1)/components/navigation-system.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "NavigationSystem",
    ()=>NavigationSystem
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$acumen$2d$strategy$2d$blog__$28$1$292f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/acumen-strategy-blog (1)/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$acumen$2d$strategy$2d$blog__$28$1$292f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/acumen-strategy-blog (1)/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$acumen$2d$strategy$2d$blog__$28$1$292f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$menu$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Menu$3e$__ = __turbopack_context__.i("[project]/Downloads/acumen-strategy-blog (1)/node_modules/lucide-react/dist/esm/icons/menu.js [app-client] (ecmascript) <export default as Menu>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$acumen$2d$strategy$2d$blog__$28$1$292f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/acumen-strategy-blog (1)/node_modules/next/image.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
const services = [
    {
        id: "strategy",
        name: "Strategy",
        color: "#0A2463"
    },
    {
        id: "labs",
        name: "Labs",
        color: "#00D4AA"
    },
    {
        id: "glynac",
        name: "Glynac",
        color: "#0066CC"
    },
    {
        id: "phh",
        name: "PHH",
        color: "#E2725B"
    },
    {
        id: "tollbooth",
        name: "Tollbooth",
        color: "#00C49A"
    },
    {
        id: "talent",
        name: "Talent Solutions",
        color: "#7B68EE"
    }
];
function NavigationSystem() {
    _s();
    const [scrolled, setScrolled] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$acumen$2d$strategy$2d$blog__$28$1$292f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [expanded, setExpanded] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$acumen$2d$strategy$2d$blog__$28$1$292f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [activeService, setActiveService] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$acumen$2d$strategy$2d$blog__$28$1$292f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$acumen$2d$strategy$2d$blog__$28$1$292f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "NavigationSystem.useEffect": ()=>{
            const handleScroll = {
                "NavigationSystem.useEffect.handleScroll": ()=>{
                    setScrolled(window.scrollY > 100);
                }
            }["NavigationSystem.useEffect.handleScroll"];
            window.addEventListener("scroll", handleScroll);
            return ({
                "NavigationSystem.useEffect": ()=>window.removeEventListener("scroll", handleScroll)
            })["NavigationSystem.useEffect"];
        }
    }["NavigationSystem.useEffect"], []);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$acumen$2d$strategy$2d$blog__$28$1$292f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$acumen$2d$strategy$2d$blog__$28$1$292f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$acumen$2d$strategy$2d$blog__$28$1$292f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("nav", {
                className: `fixed left-4 top-1/2 -translate-y-1/2 z-50 transition-all duration-500 ${scrolled ? "opacity-100" : "opacity-0 pointer-events-none"}`,
                onMouseEnter: ()=>setExpanded(true),
                onMouseLeave: ()=>{
                    setExpanded(false);
                    setActiveService(null);
                },
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$acumen$2d$strategy$2d$blog__$28$1$292f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: `bg-white/10 backdrop-blur-md border border-white/20 rounded-lg overflow-hidden transition-all duration-300 ${expanded ? "w-64" : "w-16"}`,
                    children: services.map((service)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$acumen$2d$strategy$2d$blog__$28$1$292f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            className: "w-full p-4 flex items-center gap-4 hover:bg-white/10 transition-colors group relative",
                            onMouseEnter: ()=>setActiveService(service.id),
                            style: {
                                borderLeft: activeService === service.id ? `4px solid ${service.color}` : "4px solid transparent"
                            },
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$acumen$2d$strategy$2d$blog__$28$1$292f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "w-8 h-8 rounded-full flex-shrink-0 transition-all duration-300",
                                    style: {
                                        backgroundColor: service.color,
                                        boxShadow: activeService === service.id ? `0 0 20px ${service.color}` : "none"
                                    }
                                }, void 0, false, {
                                    fileName: "[project]/Downloads/acumen-strategy-blog (1)/components/navigation-system.tsx",
                                    lineNumber: 54,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$acumen$2d$strategy$2d$blog__$28$1$292f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: `text-white font-medium whitespace-nowrap transition-opacity duration-300 ${expanded ? "opacity-100" : "opacity-0"}`,
                                    children: service.name
                                }, void 0, false, {
                                    fileName: "[project]/Downloads/acumen-strategy-blog (1)/components/navigation-system.tsx",
                                    lineNumber: 61,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, service.id, true, {
                            fileName: "[project]/Downloads/acumen-strategy-blog (1)/components/navigation-system.tsx",
                            lineNumber: 46,
                            columnNumber: 13
                        }, this))
                }, void 0, false, {
                    fileName: "[project]/Downloads/acumen-strategy-blog (1)/components/navigation-system.tsx",
                    lineNumber: 41,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/Downloads/acumen-strategy-blog (1)/components/navigation-system.tsx",
                lineNumber: 32,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$acumen$2d$strategy$2d$blog__$28$1$292f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("header", {
                className: `fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${scrolled ? "bg-[#0A2463]/95 backdrop-blur-md shadow-lg" : "bg-transparent"}`,
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$acumen$2d$strategy$2d$blog__$28$1$292f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "max-w-7xl mx-auto px-4 md:px-8 py-4 flex items-center justify-between",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$acumen$2d$strategy$2d$blog__$28$1$292f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex items-center gap-2",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$acumen$2d$strategy$2d$blog__$28$1$292f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$acumen$2d$strategy$2d$blog__$28$1$292f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                src: "/logo.png",
                                alt: "Acumen Strategy",
                                width: 180,
                                height: 50,
                                className: "h-10 w-auto"
                            }, void 0, false, {
                                fileName: "[project]/Downloads/acumen-strategy-blog (1)/components/navigation-system.tsx",
                                lineNumber: 79,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/Downloads/acumen-strategy-blog (1)/components/navigation-system.tsx",
                            lineNumber: 78,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$acumen$2d$strategy$2d$blog__$28$1$292f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("nav", {
                            className: "hidden md:flex items-center gap-8",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$acumen$2d$strategy$2d$blog__$28$1$292f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                    href: "#hero",
                                    className: "text-white/80 hover:text-white transition-colors",
                                    children: "Home"
                                }, void 0, false, {
                                    fileName: "[project]/Downloads/acumen-strategy-blog (1)/components/navigation-system.tsx",
                                    lineNumber: 89,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$acumen$2d$strategy$2d$blog__$28$1$292f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                    href: "#insights",
                                    className: "text-white/80 hover:text-white transition-colors",
                                    children: "Insights"
                                }, void 0, false, {
                                    fileName: "[project]/Downloads/acumen-strategy-blog (1)/components/navigation-system.tsx",
                                    lineNumber: 92,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$acumen$2d$strategy$2d$blog__$28$1$292f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                    href: "#ecosystem",
                                    className: "text-white/80 hover:text-white transition-colors",
                                    children: "Ecosystem"
                                }, void 0, false, {
                                    fileName: "[project]/Downloads/acumen-strategy-blog (1)/components/navigation-system.tsx",
                                    lineNumber: 95,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$acumen$2d$strategy$2d$blog__$28$1$292f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                    href: "#contact",
                                    className: "text-white/80 hover:text-white transition-colors",
                                    children: "Contact"
                                }, void 0, false, {
                                    fileName: "[project]/Downloads/acumen-strategy-blog (1)/components/navigation-system.tsx",
                                    lineNumber: 98,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/Downloads/acumen-strategy-blog (1)/components/navigation-system.tsx",
                            lineNumber: 88,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$acumen$2d$strategy$2d$blog__$28$1$292f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            className: "md:hidden text-white",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$acumen$2d$strategy$2d$blog__$28$1$292f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$acumen$2d$strategy$2d$blog__$28$1$292f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$menu$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Menu$3e$__["Menu"], {
                                size: 24
                            }, void 0, false, {
                                fileName: "[project]/Downloads/acumen-strategy-blog (1)/components/navigation-system.tsx",
                                lineNumber: 104,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/Downloads/acumen-strategy-blog (1)/components/navigation-system.tsx",
                            lineNumber: 103,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/Downloads/acumen-strategy-blog (1)/components/navigation-system.tsx",
                    lineNumber: 77,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/Downloads/acumen-strategy-blog (1)/components/navigation-system.tsx",
                lineNumber: 73,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true);
}
_s(NavigationSystem, "5pBxkKHN84uZ2ImMxq/EbcE+8No=");
_c = NavigationSystem;
var _c;
__turbopack_context__.k.register(_c, "NavigationSystem");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/Downloads/acumen-strategy-blog (1)/components/blog-grid.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "BlogGrid",
    ()=>BlogGrid
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$acumen$2d$strategy$2d$blog__$28$1$292f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/acumen-strategy-blog (1)/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$acumen$2d$strategy$2d$blog__$28$1$292f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/acumen-strategy-blog (1)/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$acumen$2d$strategy$2d$blog__$28$1$292f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/acumen-strategy-blog (1)/node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$acumen$2d$strategy$2d$blog__$28$1$292f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$components$2f$AnimatePresence$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/acumen-strategy-blog (1)/node_modules/framer-motion/dist/es/components/AnimatePresence/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$acumen$2d$strategy$2d$blog__$28$1$292f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$right$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowRight$3e$__ = __turbopack_context__.i("[project]/Downloads/acumen-strategy-blog (1)/node_modules/lucide-react/dist/esm/icons/arrow-right.js [app-client] (ecmascript) <export default as ArrowRight>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$acumen$2d$strategy$2d$blog__$28$1$292f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$clock$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Clock$3e$__ = __turbopack_context__.i("[project]/Downloads/acumen-strategy-blog (1)/node_modules/lucide-react/dist/esm/icons/clock.js [app-client] (ecmascript) <export default as Clock>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$acumen$2d$strategy$2d$blog__$28$1$292f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$trending$2d$up$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__TrendingUp$3e$__ = __turbopack_context__.i("[project]/Downloads/acumen-strategy-blog (1)/node_modules/lucide-react/dist/esm/icons/trending-up.js [app-client] (ecmascript) <export default as TrendingUp>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$acumen$2d$strategy$2d$blog__$28$1$292f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$lightbulb$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Lightbulb$3e$__ = __turbopack_context__.i("[project]/Downloads/acumen-strategy-blog (1)/node_modules/lucide-react/dist/esm/icons/lightbulb.js [app-client] (ecmascript) <export default as Lightbulb>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$acumen$2d$strategy$2d$blog__$28$1$292f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$shield$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Shield$3e$__ = __turbopack_context__.i("[project]/Downloads/acumen-strategy-blog (1)/node_modules/lucide-react/dist/esm/icons/shield.js [app-client] (ecmascript) <export default as Shield>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$acumen$2d$strategy$2d$blog__$28$1$292f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$zap$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Zap$3e$__ = __turbopack_context__.i("[project]/Downloads/acumen-strategy-blog (1)/node_modules/lucide-react/dist/esm/icons/zap.js [app-client] (ecmascript) <export default as Zap>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$acumen$2d$strategy$2d$blog__$28$1$292f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/acumen-strategy-blog (1)/node_modules/next/dist/client/app-dir/link.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
;
const contentTypes = [
    {
        id: "all",
        label: "All Insights",
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$acumen$2d$strategy$2d$blog__$28$1$292f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$lightbulb$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Lightbulb$3e$__["Lightbulb"]
    },
    {
        id: "strategy",
        label: "Strategy Insights",
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$acumen$2d$strategy$2d$blog__$28$1$292f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$trending$2d$up$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__TrendingUp$3e$__["TrendingUp"]
    },
    {
        id: "technology",
        label: "Technology Briefs",
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$acumen$2d$strategy$2d$blog__$28$1$292f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$zap$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Zap$3e$__["Zap"]
    },
    {
        id: "compliance",
        label: "Compliance Updates",
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$acumen$2d$strategy$2d$blog__$28$1$292f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$shield$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Shield$3e$__["Shield"]
    }
];
const blogPosts = [
    {
        id: 1,
        title: "Navigating the New Fiduciary Landscape",
        excerpt: "Understanding the evolving regulatory requirements and their impact on advisory practices.",
        category: "compliance",
        service: "Strategy",
        serviceColor: "#0A2463",
        readTime: 8,
        image: "/regulatory-compliance-abstract.jpg",
        featured: true
    },
    {
        id: 2,
        title: "AI-Powered Client Engagement",
        excerpt: "Leveraging Glynac's intelligent systems to transform client relationships.",
        category: "technology",
        service: "Glynac",
        serviceColor: "#0066CC",
        readTime: 6,
        image: "/ai-neural-network.png",
        featured: false
    },
    {
        id: 3,
        title: "Real Estate Investment Strategies for 2025",
        excerpt: "PHH's latest insights on optimizing real estate portfolios in changing markets.",
        category: "strategy",
        service: "PHH",
        serviceColor: "#E2725B",
        readTime: 10,
        image: "/modern-real-estate-skyline.png",
        featured: false
    },
    {
        id: 4,
        title: "Distribution Solutions That Scale",
        excerpt: "How Tollbooth is revolutionizing product distribution for RIAs.",
        category: "technology",
        service: "Tollbooth",
        serviceColor: "#00C49A",
        readTime: 7,
        image: "/network-distribution-graph.jpg",
        featured: false
    },
    {
        id: 5,
        title: "Building High-Performance Advisory Teams",
        excerpt: "Talent acquisition and retention strategies from Acumen Talent Solutions.",
        category: "strategy",
        service: "Talent",
        serviceColor: "#7B68EE",
        readTime: 9,
        image: "/professional-team-collaboration.jpg",
        featured: false
    },
    {
        id: 6,
        title: "Innovation Labs: From Concept to Market",
        excerpt: "Inside Acumen Labs' approach to rapid prototyping and market validation.",
        category: "technology",
        service: "Labs",
        serviceColor: "#00D4AA",
        readTime: 12,
        image: "/innovation-lab-technology.jpg",
        featured: true
    }
];
function BlogGrid() {
    _s();
    const [activeFilter, setActiveFilter] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$acumen$2d$strategy$2d$blog__$28$1$292f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("all");
    const [hoveredCard, setHoveredCard] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$acumen$2d$strategy$2d$blog__$28$1$292f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const filteredPosts = activeFilter === "all" ? blogPosts : blogPosts.filter((post)=>post.category === activeFilter);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$acumen$2d$strategy$2d$blog__$28$1$292f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$acumen$2d$strategy$2d$blog__$28$1$292f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex flex-wrap gap-3 mb-12 justify-center",
                children: contentTypes.map((type)=>{
                    const Icon = type.icon;
                    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$acumen$2d$strategy$2d$blog__$28$1$292f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        onClick: ()=>setActiveFilter(type.id),
                        className: `flex items-center gap-2 px-6 py-3 rounded-full font-medium transition-all duration-300 ${activeFilter === type.id ? "bg-[#00D4AA] text-white shadow-lg scale-105" : "bg-card hover:bg-accent text-foreground border border-border"}`,
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$acumen$2d$strategy$2d$blog__$28$1$292f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Icon, {
                                size: 18
                            }, void 0, false, {
                                fileName: "[project]/Downloads/acumen-strategy-blog (1)/components/blog-grid.tsx",
                                lineNumber: 106,
                                columnNumber: 15
                            }, this),
                            type.label
                        ]
                    }, type.id, true, {
                        fileName: "[project]/Downloads/acumen-strategy-blog (1)/components/blog-grid.tsx",
                        lineNumber: 97,
                        columnNumber: 13
                    }, this);
                })
            }, void 0, false, {
                fileName: "[project]/Downloads/acumen-strategy-blog (1)/components/blog-grid.tsx",
                lineNumber: 93,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$acumen$2d$strategy$2d$blog__$28$1$292f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$acumen$2d$strategy$2d$blog__$28$1$292f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                layout: true,
                className: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$acumen$2d$strategy$2d$blog__$28$1$292f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$acumen$2d$strategy$2d$blog__$28$1$292f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$components$2f$AnimatePresence$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AnimatePresence"], {
                    mode: "popLayout",
                    children: filteredPosts.map((post, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$acumen$2d$strategy$2d$blog__$28$1$292f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$acumen$2d$strategy$2d$blog__$28$1$292f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                            layout: true,
                            initial: {
                                opacity: 0,
                                scale: 0.9
                            },
                            animate: {
                                opacity: 1,
                                scale: 1
                            },
                            exit: {
                                opacity: 0,
                                scale: 0.9
                            },
                            transition: {
                                duration: 0.3,
                                delay: index * 0.05
                            },
                            className: `group relative ${post.featured ? "md:col-span-2 md:row-span-2" : ""}`,
                            onMouseEnter: ()=>setHoveredCard(post.id),
                            onMouseLeave: ()=>setHoveredCard(null),
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$acumen$2d$strategy$2d$blog__$28$1$292f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$acumen$2d$strategy$2d$blog__$28$1$292f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                href: `/article/${post.id}`,
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$acumen$2d$strategy$2d$blog__$28$1$292f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "relative h-full bg-card rounded-lg overflow-hidden border border-border transition-all duration-300 hover:shadow-2xl",
                                    style: {
                                        boxShadow: hoveredCard === post.id ? `0 20px 60px -10px ${post.serviceColor}40` : "0 4px 6px rgba(0,0,0,0.1)",
                                        borderColor: hoveredCard === post.id ? post.serviceColor : "var(--border)"
                                    },
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$acumen$2d$strategy$2d$blog__$28$1$292f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "absolute top-4 right-4 z-10 px-3 py-1 rounded-full text-xs font-semibold text-white backdrop-blur-sm",
                                            style: {
                                                backgroundColor: `${post.serviceColor}dd`
                                            },
                                            children: post.service
                                        }, void 0, false, {
                                            fileName: "[project]/Downloads/acumen-strategy-blog (1)/components/blog-grid.tsx",
                                            lineNumber: 140,
                                            columnNumber: 19
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$acumen$2d$strategy$2d$blog__$28$1$292f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "relative h-64 overflow-hidden",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$acumen$2d$strategy$2d$blog__$28$1$292f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                                    src: post.image || "/placeholder.svg",
                                                    alt: post.title,
                                                    className: "w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                                                }, void 0, false, {
                                                    fileName: "[project]/Downloads/acumen-strategy-blog (1)/components/blog-grid.tsx",
                                                    lineNumber: 149,
                                                    columnNumber: 21
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$acumen$2d$strategy$2d$blog__$28$1$292f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "absolute inset-0 bg-gradient-to-t from-card via-card/50 to-transparent"
                                                }, void 0, false, {
                                                    fileName: "[project]/Downloads/acumen-strategy-blog (1)/components/blog-grid.tsx",
                                                    lineNumber: 154,
                                                    columnNumber: 21
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/Downloads/acumen-strategy-blog (1)/components/blog-grid.tsx",
                                            lineNumber: 148,
                                            columnNumber: 19
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$acumen$2d$strategy$2d$blog__$28$1$292f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: `p-6 ${post.featured ? "md:p-8" : ""}`,
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$acumen$2d$strategy$2d$blog__$28$1$292f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "flex items-center gap-2 text-muted-foreground text-sm mb-3",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$acumen$2d$strategy$2d$blog__$28$1$292f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$acumen$2d$strategy$2d$blog__$28$1$292f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$clock$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Clock$3e$__["Clock"], {
                                                            size: 16
                                                        }, void 0, false, {
                                                            fileName: "[project]/Downloads/acumen-strategy-blog (1)/components/blog-grid.tsx",
                                                            lineNumber: 160,
                                                            columnNumber: 23
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$acumen$2d$strategy$2d$blog__$28$1$292f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            children: [
                                                                post.readTime,
                                                                " min read"
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/Downloads/acumen-strategy-blog (1)/components/blog-grid.tsx",
                                                            lineNumber: 161,
                                                            columnNumber: 23
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/Downloads/acumen-strategy-blog (1)/components/blog-grid.tsx",
                                                    lineNumber: 159,
                                                    columnNumber: 21
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$acumen$2d$strategy$2d$blog__$28$1$292f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                    className: `font-bold mb-3 text-balance ${post.featured ? "text-2xl md:text-3xl" : "text-xl"}`,
                                                    children: post.title
                                                }, void 0, false, {
                                                    fileName: "[project]/Downloads/acumen-strategy-blog (1)/components/blog-grid.tsx",
                                                    lineNumber: 164,
                                                    columnNumber: 21
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$acumen$2d$strategy$2d$blog__$28$1$292f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    className: "text-muted-foreground mb-4 leading-relaxed",
                                                    children: post.excerpt
                                                }, void 0, false, {
                                                    fileName: "[project]/Downloads/acumen-strategy-blog (1)/components/blog-grid.tsx",
                                                    lineNumber: 168,
                                                    columnNumber: 21
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$acumen$2d$strategy$2d$blog__$28$1$292f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "flex items-center gap-2 text-[#00D4AA] font-semibold group-hover:gap-4 transition-all",
                                                    children: [
                                                        "Read More",
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$acumen$2d$strategy$2d$blog__$28$1$292f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$acumen$2d$strategy$2d$blog__$28$1$292f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$right$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowRight$3e$__["ArrowRight"], {
                                                            size: 18,
                                                            className: "transition-transform group-hover:translate-x-1"
                                                        }, void 0, false, {
                                                            fileName: "[project]/Downloads/acumen-strategy-blog (1)/components/blog-grid.tsx",
                                                            lineNumber: 172,
                                                            columnNumber: 23
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/Downloads/acumen-strategy-blog (1)/components/blog-grid.tsx",
                                                    lineNumber: 170,
                                                    columnNumber: 21
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/Downloads/acumen-strategy-blog (1)/components/blog-grid.tsx",
                                            lineNumber: 158,
                                            columnNumber: 19
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$acumen$2d$strategy$2d$blog__$28$1$292f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$acumen$2d$strategy$2d$blog__$28$1$292f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                                            className: "absolute inset-0 rounded-lg pointer-events-none",
                                            style: {
                                                border: `2px solid ${post.serviceColor}`,
                                                opacity: hoveredCard === post.id ? 1 : 0
                                            },
                                            animate: {
                                                opacity: hoveredCard === post.id ? [
                                                    0.3,
                                                    0.6,
                                                    0.3
                                                ] : 0
                                            },
                                            transition: {
                                                duration: 2,
                                                repeat: Number.POSITIVE_INFINITY,
                                                ease: "easeInOut"
                                            }
                                        }, void 0, false, {
                                            fileName: "[project]/Downloads/acumen-strategy-blog (1)/components/blog-grid.tsx",
                                            lineNumber: 177,
                                            columnNumber: 19
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/Downloads/acumen-strategy-blog (1)/components/blog-grid.tsx",
                                    lineNumber: 129,
                                    columnNumber: 17
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/Downloads/acumen-strategy-blog (1)/components/blog-grid.tsx",
                                lineNumber: 128,
                                columnNumber: 15
                            }, this)
                        }, post.id, false, {
                            fileName: "[project]/Downloads/acumen-strategy-blog (1)/components/blog-grid.tsx",
                            lineNumber: 117,
                            columnNumber: 13
                        }, this))
                }, void 0, false, {
                    fileName: "[project]/Downloads/acumen-strategy-blog (1)/components/blog-grid.tsx",
                    lineNumber: 115,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/Downloads/acumen-strategy-blog (1)/components/blog-grid.tsx",
                lineNumber: 114,
                columnNumber: 7
            }, this),
            filteredPosts.length === 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$acumen$2d$strategy$2d$blog__$28$1$292f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "text-center py-20",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$acumen$2d$strategy$2d$blog__$28$1$292f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                    className: "text-muted-foreground text-lg",
                    children: "No content found for this filter."
                }, void 0, false, {
                    fileName: "[project]/Downloads/acumen-strategy-blog (1)/components/blog-grid.tsx",
                    lineNumber: 201,
                    columnNumber: 11
                }, this)
            }, void 0, false, {
                fileName: "[project]/Downloads/acumen-strategy-blog (1)/components/blog-grid.tsx",
                lineNumber: 200,
                columnNumber: 9
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/Downloads/acumen-strategy-blog (1)/components/blog-grid.tsx",
        lineNumber: 91,
        columnNumber: 5
    }, this);
}
_s(BlogGrid, "rD+1JQIncty7tJB6+TUmzF+8Jao=");
_c = BlogGrid;
var _c;
__turbopack_context__.k.register(_c, "BlogGrid");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/Downloads/acumen-strategy-blog (1)/components/ecosystem-portal.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "EcosystemPortal",
    ()=>EcosystemPortal
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$acumen$2d$strategy$2d$blog__$28$1$292f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/acumen-strategy-blog (1)/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$acumen$2d$strategy$2d$blog__$28$1$292f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/acumen-strategy-blog (1)/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$acumen$2d$strategy$2d$blog__$28$1$292f$node_modules$2f40$react$2d$three$2f$fiber$2f$dist$2f$react$2d$three$2d$fiber$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/Downloads/acumen-strategy-blog (1)/node_modules/@react-three/fiber/dist/react-three-fiber.esm.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$acumen$2d$strategy$2d$blog__$28$1$292f$node_modules$2f40$react$2d$three$2f$drei$2f$core$2f$OrbitControls$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/acumen-strategy-blog (1)/node_modules/@react-three/drei/core/OrbitControls.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$acumen$2d$strategy$2d$blog__$28$1$292f$node_modules$2f40$react$2d$three$2f$drei$2f$web$2f$Html$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/acumen-strategy-blog (1)/node_modules/@react-three/drei/web/Html.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$acumen$2d$strategy$2d$blog__$28$1$292f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/acumen-strategy-blog (1)/node_modules/three/build/three.core.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
;
const ecosystemServices = [
    {
        id: "strategy",
        name: "Acumen Strategy",
        color: "#0A2463",
        position: [
            0,
            0,
            0
        ],
        description: "Strategic advisory and consulting services",
        metrics: "250+ RIA partnerships"
    },
    {
        id: "labs",
        name: "Acumen Labs",
        color: "#00D4AA",
        position: [
            3,
            1.5,
            0
        ],
        description: "Innovation and product development",
        metrics: "15+ products launched"
    },
    {
        id: "glynac",
        name: "Glynac AI",
        color: "#0066CC",
        position: [
            -3,
            1.5,
            0
        ],
        description: "AI-powered advisory tools",
        metrics: "2M+ client interactions"
    },
    {
        id: "phh",
        name: "PHH Real Estate",
        color: "#E2725B",
        position: [
            3,
            -1.5,
            0
        ],
        description: "Real estate investment solutions",
        metrics: "$500M+ AUM"
    },
    {
        id: "tollbooth",
        name: "Tollbooth",
        color: "#00C49A",
        position: [
            -3,
            -1.5,
            0
        ],
        description: "Distribution platform",
        metrics: "100+ product integrations"
    },
    {
        id: "talent",
        name: "Talent Solutions",
        color: "#7B68EE",
        position: [
            0,
            -3,
            0
        ],
        description: "Recruitment and team building",
        metrics: "500+ placements"
    }
];
function EcosystemNode({ service, onClick, isActive }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$acumen$2d$strategy$2d$blog__$28$1$292f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("mesh", {
        position: service.position,
        onClick: onClick,
        scale: isActive ? 1.3 : 1,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$acumen$2d$strategy$2d$blog__$28$1$292f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("sphereGeometry", {
                args: [
                    0.5,
                    32,
                    32
                ]
            }, void 0, false, {
                fileName: "[project]/Downloads/acumen-strategy-blog (1)/components/ecosystem-portal.tsx",
                lineNumber: 71,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$acumen$2d$strategy$2d$blog__$28$1$292f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("meshStandardMaterial", {
                color: service.color,
                emissive: service.color,
                emissiveIntensity: isActive ? 0.8 : 0.3,
                metalness: 0.8,
                roughness: 0.2
            }, void 0, false, {
                fileName: "[project]/Downloads/acumen-strategy-blog (1)/components/ecosystem-portal.tsx",
                lineNumber: 72,
                columnNumber: 7
            }, this),
            isActive && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$acumen$2d$strategy$2d$blog__$28$1$292f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$acumen$2d$strategy$2d$blog__$28$1$292f$node_modules$2f40$react$2d$three$2f$drei$2f$web$2f$Html$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Html"], {
                position: [
                    0,
                    1,
                    0
                ],
                center: true,
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$acumen$2d$strategy$2d$blog__$28$1$292f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "bg-white/95 backdrop-blur-sm rounded-lg p-4 shadow-xl border border-gray-200 w-64",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$acumen$2d$strategy$2d$blog__$28$1$292f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                            className: "font-bold text-lg mb-2",
                            style: {
                                color: service.color
                            },
                            children: service.name
                        }, void 0, false, {
                            fileName: "[project]/Downloads/acumen-strategy-blog (1)/components/ecosystem-portal.tsx",
                            lineNumber: 82,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$acumen$2d$strategy$2d$blog__$28$1$292f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "text-sm text-gray-600 mb-2",
                            children: service.description
                        }, void 0, false, {
                            fileName: "[project]/Downloads/acumen-strategy-blog (1)/components/ecosystem-portal.tsx",
                            lineNumber: 85,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$acumen$2d$strategy$2d$blog__$28$1$292f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "text-xs font-semibold text-gray-800",
                            children: service.metrics
                        }, void 0, false, {
                            fileName: "[project]/Downloads/acumen-strategy-blog (1)/components/ecosystem-portal.tsx",
                            lineNumber: 86,
                            columnNumber: 13
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/Downloads/acumen-strategy-blog (1)/components/ecosystem-portal.tsx",
                    lineNumber: 81,
                    columnNumber: 11
                }, this)
            }, void 0, false, {
                fileName: "[project]/Downloads/acumen-strategy-blog (1)/components/ecosystem-portal.tsx",
                lineNumber: 80,
                columnNumber: 9
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/Downloads/acumen-strategy-blog (1)/components/ecosystem-portal.tsx",
        lineNumber: 70,
        columnNumber: 5
    }, this);
}
_c = EcosystemNode;
function ConnectionWeb() {
    const lines = [];
    ecosystemServices.forEach((service, i)=>{
        ecosystemServices.slice(i + 1).forEach((target, j)=>{
            const points = [
                new __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$acumen$2d$strategy$2d$blog__$28$1$292f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Vector3"](...service.position),
                new __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$acumen$2d$strategy$2d$blog__$28$1$292f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Vector3"](...target.position)
            ];
            const geometry = new __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$acumen$2d$strategy$2d$blog__$28$1$292f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["BufferGeometry"]().setFromPoints(points);
            lines.push(/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$acumen$2d$strategy$2d$blog__$28$1$292f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("line", {
                geometry: geometry,
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$acumen$2d$strategy$2d$blog__$28$1$292f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("lineBasicMaterial", {
                    color: "#00D4AA",
                    opacity: 0.2,
                    transparent: true,
                    linewidth: 2
                }, void 0, false, {
                    fileName: "[project]/Downloads/acumen-strategy-blog (1)/components/ecosystem-portal.tsx",
                    lineNumber: 104,
                    columnNumber: 11
                }, this)
            }, `${i}-${j}`, false, {
                fileName: "[project]/Downloads/acumen-strategy-blog (1)/components/ecosystem-portal.tsx",
                lineNumber: 103,
                columnNumber: 9
            }, this));
        });
    });
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$acumen$2d$strategy$2d$blog__$28$1$292f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("group", {
        children: lines
    }, void 0, false, {
        fileName: "[project]/Downloads/acumen-strategy-blog (1)/components/ecosystem-portal.tsx",
        lineNumber: 110,
        columnNumber: 10
    }, this);
}
_c1 = ConnectionWeb;
function EcosystemPortal() {
    _s();
    const [activeService, setActiveService] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$acumen$2d$strategy$2d$blog__$28$1$292f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$acumen$2d$strategy$2d$blog__$28$1$292f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "w-full h-[600px] bg-gradient-to-br from-[#0A2463]/10 to-[#00D4AA]/10 rounded-xl overflow-hidden border border-border",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$acumen$2d$strategy$2d$blog__$28$1$292f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$acumen$2d$strategy$2d$blog__$28$1$292f$node_modules$2f40$react$2d$three$2f$fiber$2f$dist$2f$react$2d$three$2d$fiber$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["Canvas"], {
                camera: {
                    position: [
                        0,
                        0,
                        10
                    ],
                    fov: 50
                },
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$acumen$2d$strategy$2d$blog__$28$1$292f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("ambientLight", {
                        intensity: 0.6
                    }, void 0, false, {
                        fileName: "[project]/Downloads/acumen-strategy-blog (1)/components/ecosystem-portal.tsx",
                        lineNumber: 119,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$acumen$2d$strategy$2d$blog__$28$1$292f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("pointLight", {
                        position: [
                            10,
                            10,
                            10
                        ],
                        intensity: 1
                    }, void 0, false, {
                        fileName: "[project]/Downloads/acumen-strategy-blog (1)/components/ecosystem-portal.tsx",
                        lineNumber: 120,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$acumen$2d$strategy$2d$blog__$28$1$292f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("pointLight", {
                        position: [
                            -10,
                            -10,
                            -10
                        ],
                        intensity: 0.5,
                        color: "#00D4AA"
                    }, void 0, false, {
                        fileName: "[project]/Downloads/acumen-strategy-blog (1)/components/ecosystem-portal.tsx",
                        lineNumber: 121,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$acumen$2d$strategy$2d$blog__$28$1$292f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(ConnectionWeb, {}, void 0, false, {
                        fileName: "[project]/Downloads/acumen-strategy-blog (1)/components/ecosystem-portal.tsx",
                        lineNumber: 123,
                        columnNumber: 9
                    }, this),
                    ecosystemServices.map((service)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$acumen$2d$strategy$2d$blog__$28$1$292f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(EcosystemNode, {
                            service: service,
                            onClick: ()=>setActiveService(service.id === activeService ? null : service.id),
                            isActive: activeService === service.id
                        }, service.id, false, {
                            fileName: "[project]/Downloads/acumen-strategy-blog (1)/components/ecosystem-portal.tsx",
                            lineNumber: 126,
                            columnNumber: 11
                        }, this)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$acumen$2d$strategy$2d$blog__$28$1$292f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$acumen$2d$strategy$2d$blog__$28$1$292f$node_modules$2f40$react$2d$three$2f$drei$2f$core$2f$OrbitControls$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["OrbitControls"], {
                        enableZoom: true,
                        enablePan: false,
                        autoRotate: true,
                        autoRotateSpeed: 1
                    }, void 0, false, {
                        fileName: "[project]/Downloads/acumen-strategy-blog (1)/components/ecosystem-portal.tsx",
                        lineNumber: 134,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/Downloads/acumen-strategy-blog (1)/components/ecosystem-portal.tsx",
                lineNumber: 118,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$acumen$2d$strategy$2d$blog__$28$1$292f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "absolute bottom-8 left-1/2 -translate-x-1/2 bg-white/90 backdrop-blur-sm rounded-full px-6 py-3 text-sm text-gray-700 shadow-lg",
                children: "Click and drag to explore • Tap nodes for details"
            }, void 0, false, {
                fileName: "[project]/Downloads/acumen-strategy-blog (1)/components/ecosystem-portal.tsx",
                lineNumber: 137,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/Downloads/acumen-strategy-blog (1)/components/ecosystem-portal.tsx",
        lineNumber: 117,
        columnNumber: 5
    }, this);
}
_s(EcosystemPortal, "WZy3WZ84d+qIQrZk4I0g2pdVtAg=");
_c2 = EcosystemPortal;
var _c, _c1, _c2;
__turbopack_context__.k.register(_c, "EcosystemNode");
__turbopack_context__.k.register(_c1, "ConnectionWeb");
__turbopack_context__.k.register(_c2, "EcosystemPortal");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/Downloads/acumen-strategy-blog (1)/components/conversational-contact.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ConversationalContact",
    ()=>ConversationalContact
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$acumen$2d$strategy$2d$blog__$28$1$292f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/acumen-strategy-blog (1)/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$acumen$2d$strategy$2d$blog__$28$1$292f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/acumen-strategy-blog (1)/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$acumen$2d$strategy$2d$blog__$28$1$292f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/acumen-strategy-blog (1)/node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$acumen$2d$strategy$2d$blog__$28$1$292f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$components$2f$AnimatePresence$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/acumen-strategy-blog (1)/node_modules/framer-motion/dist/es/components/AnimatePresence/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$acumen$2d$strategy$2d$blog__$28$1$292f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$send$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Send$3e$__ = __turbopack_context__.i("[project]/Downloads/acumen-strategy-blog (1)/node_modules/lucide-react/dist/esm/icons/send.js [app-client] (ecmascript) <export default as Send>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$acumen$2d$strategy$2d$blog__$28$1$292f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$right$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowRight$3e$__ = __turbopack_context__.i("[project]/Downloads/acumen-strategy-blog (1)/node_modules/lucide-react/dist/esm/icons/arrow-right.js [app-client] (ecmascript) <export default as ArrowRight>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$acumen$2d$strategy$2d$blog__$28$1$292f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$check$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__CheckCircle2$3e$__ = __turbopack_context__.i("[project]/Downloads/acumen-strategy-blog (1)/node_modules/lucide-react/dist/esm/icons/circle-check.js [app-client] (ecmascript) <export default as CheckCircle2>");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
const steps = [
    {
        id: 1,
        question: "What's your primary challenge?",
        options: [
            "Scaling my practice",
            "Technology integration",
            "Compliance & regulation",
            "Client acquisition",
            "Team building",
            "Distribution strategy"
        ]
    },
    {
        id: 2,
        question: "Which areas affect you most?",
        info: "Select all that apply",
        multiSelect: true,
        options: [
            "Advisory",
            "Technology",
            "Real Estate",
            "Distribution",
            "Talent",
            "Compliance"
        ]
    },
    {
        id: 3,
        question: "What's your desired timeline?",
        options: [
            "Immediate (30 days)",
            "Short-term (90 days)",
            "Mid-term (6 months)",
            "Long-term planning (1+ year)"
        ]
    }
];
function ConversationalContact() {
    _s();
    const [currentStep, setCurrentStep] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$acumen$2d$strategy$2d$blog__$28$1$292f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(0);
    const [answers, setAnswers] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$acumen$2d$strategy$2d$blog__$28$1$292f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])({});
    const [showForm, setShowForm] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$acumen$2d$strategy$2d$blog__$28$1$292f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [formData, setFormData] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$acumen$2d$strategy$2d$blog__$28$1$292f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])({
        name: "",
        email: "",
        company: ""
    });
    const [submitted, setSubmitted] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$acumen$2d$strategy$2d$blog__$28$1$292f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const handleOptionSelect = (option)=>{
        const step = steps[currentStep];
        if (step.multiSelect) {
            const current = answers[currentStep] || [];
            const updated = current.includes(option) ? current.filter((o)=>o !== option) : [
                ...current,
                option
            ];
            setAnswers({
                ...answers,
                [currentStep]: updated
            });
        } else {
            setAnswers({
                ...answers,
                [currentStep]: [
                    option
                ]
            });
            if (currentStep < steps.length - 1) {
                setTimeout(()=>setCurrentStep(currentStep + 1), 500);
            } else {
                setTimeout(()=>setShowForm(true), 500);
            }
        }
    };
    const handleNext = ()=>{
        if (currentStep < steps.length - 1) {
            setCurrentStep(currentStep + 1);
        } else {
            setShowForm(true);
        }
    };
    const handleSubmit = (e)=>{
        e.preventDefault();
        setSubmitted(true);
    };
    if (submitted) {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$acumen$2d$strategy$2d$blog__$28$1$292f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$acumen$2d$strategy$2d$blog__$28$1$292f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
            initial: {
                opacity: 0,
                scale: 0.9
            },
            animate: {
                opacity: 1,
                scale: 1
            },
            className: "text-center py-20",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$acumen$2d$strategy$2d$blog__$28$1$292f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$acumen$2d$strategy$2d$blog__$28$1$292f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$check$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__CheckCircle2$3e$__["CheckCircle2"], {
                    size: 64,
                    className: "mx-auto mb-6 text-[#00D4AA]"
                }, void 0, false, {
                    fileName: "[project]/Downloads/acumen-strategy-blog (1)/components/conversational-contact.tsx",
                    lineNumber: 76,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$acumen$2d$strategy$2d$blog__$28$1$292f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                    className: "text-3xl font-bold mb-4",
                    children: "Thank You!"
                }, void 0, false, {
                    fileName: "[project]/Downloads/acumen-strategy-blog (1)/components/conversational-contact.tsx",
                    lineNumber: 77,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$acumen$2d$strategy$2d$blog__$28$1$292f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                    className: "text-muted-foreground text-lg max-w-md mx-auto",
                    children: "We've received your information. An Acumen strategist will reach out within 24 hours to discuss your roadmap."
                }, void 0, false, {
                    fileName: "[project]/Downloads/acumen-strategy-blog (1)/components/conversational-contact.tsx",
                    lineNumber: 78,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/Downloads/acumen-strategy-blog (1)/components/conversational-contact.tsx",
            lineNumber: 75,
            columnNumber: 7
        }, this);
    }
    if (showForm) {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$acumen$2d$strategy$2d$blog__$28$1$292f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$acumen$2d$strategy$2d$blog__$28$1$292f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
            initial: {
                opacity: 0,
                y: 20
            },
            animate: {
                opacity: 1,
                y: 0
            },
            className: "max-w-2xl mx-auto",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$acumen$2d$strategy$2d$blog__$28$1$292f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                    className: "text-2xl font-bold mb-6",
                    children: "Let's connect"
                }, void 0, false, {
                    fileName: "[project]/Downloads/acumen-strategy-blog (1)/components/conversational-contact.tsx",
                    lineNumber: 88,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$acumen$2d$strategy$2d$blog__$28$1$292f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("form", {
                    onSubmit: handleSubmit,
                    className: "space-y-6",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$acumen$2d$strategy$2d$blog__$28$1$292f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$acumen$2d$strategy$2d$blog__$28$1$292f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                    htmlFor: "name",
                                    className: "block text-sm font-medium mb-2",
                                    children: "Full Name *"
                                }, void 0, false, {
                                    fileName: "[project]/Downloads/acumen-strategy-blog (1)/components/conversational-contact.tsx",
                                    lineNumber: 91,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$acumen$2d$strategy$2d$blog__$28$1$292f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                    id: "name",
                                    type: "text",
                                    required: true,
                                    value: formData.name,
                                    onChange: (e)=>setFormData({
                                            ...formData,
                                            name: e.target.value
                                        }),
                                    className: "w-full px-4 py-3 bg-card border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#00D4AA]",
                                    placeholder: "John Smith"
                                }, void 0, false, {
                                    fileName: "[project]/Downloads/acumen-strategy-blog (1)/components/conversational-contact.tsx",
                                    lineNumber: 94,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/Downloads/acumen-strategy-blog (1)/components/conversational-contact.tsx",
                            lineNumber: 90,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$acumen$2d$strategy$2d$blog__$28$1$292f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$acumen$2d$strategy$2d$blog__$28$1$292f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                    htmlFor: "email",
                                    className: "block text-sm font-medium mb-2",
                                    children: "Email Address *"
                                }, void 0, false, {
                                    fileName: "[project]/Downloads/acumen-strategy-blog (1)/components/conversational-contact.tsx",
                                    lineNumber: 106,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$acumen$2d$strategy$2d$blog__$28$1$292f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                    id: "email",
                                    type: "email",
                                    required: true,
                                    value: formData.email,
                                    onChange: (e)=>setFormData({
                                            ...formData,
                                            email: e.target.value
                                        }),
                                    className: "w-full px-4 py-3 bg-card border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#00D4AA]",
                                    placeholder: "john@example.com"
                                }, void 0, false, {
                                    fileName: "[project]/Downloads/acumen-strategy-blog (1)/components/conversational-contact.tsx",
                                    lineNumber: 109,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/Downloads/acumen-strategy-blog (1)/components/conversational-contact.tsx",
                            lineNumber: 105,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$acumen$2d$strategy$2d$blog__$28$1$292f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$acumen$2d$strategy$2d$blog__$28$1$292f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                    htmlFor: "company",
                                    className: "block text-sm font-medium mb-2",
                                    children: "Firm/Company *"
                                }, void 0, false, {
                                    fileName: "[project]/Downloads/acumen-strategy-blog (1)/components/conversational-contact.tsx",
                                    lineNumber: 121,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$acumen$2d$strategy$2d$blog__$28$1$292f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                    id: "company",
                                    type: "text",
                                    required: true,
                                    value: formData.company,
                                    onChange: (e)=>setFormData({
                                            ...formData,
                                            company: e.target.value
                                        }),
                                    className: "w-full px-4 py-3 bg-card border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#00D4AA]",
                                    placeholder: "Advisory Firm LLC"
                                }, void 0, false, {
                                    fileName: "[project]/Downloads/acumen-strategy-blog (1)/components/conversational-contact.tsx",
                                    lineNumber: 124,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/Downloads/acumen-strategy-blog (1)/components/conversational-contact.tsx",
                            lineNumber: 120,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$acumen$2d$strategy$2d$blog__$28$1$292f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "bg-secondary/30 rounded-lg p-4",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$acumen$2d$strategy$2d$blog__$28$1$292f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "text-sm font-medium mb-2",
                                    children: "Your responses:"
                                }, void 0, false, {
                                    fileName: "[project]/Downloads/acumen-strategy-blog (1)/components/conversational-contact.tsx",
                                    lineNumber: 136,
                                    columnNumber: 13
                                }, this),
                                Object.entries(answers).map(([stepId, values])=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$acumen$2d$strategy$2d$blog__$28$1$292f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "text-sm text-muted-foreground",
                                        children: [
                                            steps[Number.parseInt(stepId)].question,
                                            " ",
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$acumen$2d$strategy$2d$blog__$28$1$292f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                                children: values.join(", ")
                                            }, void 0, false, {
                                                fileName: "[project]/Downloads/acumen-strategy-blog (1)/components/conversational-contact.tsx",
                                                lineNumber: 139,
                                                columnNumber: 59
                                            }, this)
                                        ]
                                    }, stepId, true, {
                                        fileName: "[project]/Downloads/acumen-strategy-blog (1)/components/conversational-contact.tsx",
                                        lineNumber: 138,
                                        columnNumber: 15
                                    }, this))
                            ]
                        }, void 0, true, {
                            fileName: "[project]/Downloads/acumen-strategy-blog (1)/components/conversational-contact.tsx",
                            lineNumber: 135,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$acumen$2d$strategy$2d$blog__$28$1$292f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            type: "submit",
                            className: "w-full bg-[#00D4AA] hover:bg-[#00D4AA]/90 text-white font-semibold py-4 rounded-lg transition-all hover:scale-[1.02] flex items-center justify-center gap-2",
                            children: [
                                "Submit ",
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$acumen$2d$strategy$2d$blog__$28$1$292f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$acumen$2d$strategy$2d$blog__$28$1$292f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$send$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Send$3e$__["Send"], {
                                    size: 18
                                }, void 0, false, {
                                    fileName: "[project]/Downloads/acumen-strategy-blog (1)/components/conversational-contact.tsx",
                                    lineNumber: 148,
                                    columnNumber: 20
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/Downloads/acumen-strategy-blog (1)/components/conversational-contact.tsx",
                            lineNumber: 144,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/Downloads/acumen-strategy-blog (1)/components/conversational-contact.tsx",
                    lineNumber: 89,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/Downloads/acumen-strategy-blog (1)/components/conversational-contact.tsx",
            lineNumber: 87,
            columnNumber: 7
        }, this);
    }
    const step = steps[currentStep];
    const currentAnswers = answers[currentStep] || [];
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$acumen$2d$strategy$2d$blog__$28$1$292f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "max-w-3xl mx-auto",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$acumen$2d$strategy$2d$blog__$28$1$292f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "mb-8",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$acumen$2d$strategy$2d$blog__$28$1$292f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex justify-between mb-2",
                        children: steps.map((s, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$acumen$2d$strategy$2d$blog__$28$1$292f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: `flex-1 h-2 rounded-full mx-1 transition-all ${i <= currentStep ? "bg-[#00D4AA]" : "bg-border"}`
                            }, s.id, false, {
                                fileName: "[project]/Downloads/acumen-strategy-blog (1)/components/conversational-contact.tsx",
                                lineNumber: 164,
                                columnNumber: 13
                            }, this))
                    }, void 0, false, {
                        fileName: "[project]/Downloads/acumen-strategy-blog (1)/components/conversational-contact.tsx",
                        lineNumber: 162,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$acumen$2d$strategy$2d$blog__$28$1$292f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "text-sm text-muted-foreground text-center",
                        children: [
                            "Step ",
                            currentStep + 1,
                            " of ",
                            steps.length
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Downloads/acumen-strategy-blog (1)/components/conversational-contact.tsx",
                        lineNumber: 172,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/Downloads/acumen-strategy-blog (1)/components/conversational-contact.tsx",
                lineNumber: 161,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$acumen$2d$strategy$2d$blog__$28$1$292f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$acumen$2d$strategy$2d$blog__$28$1$292f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$components$2f$AnimatePresence$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AnimatePresence"], {
                mode: "wait",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$acumen$2d$strategy$2d$blog__$28$1$292f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$acumen$2d$strategy$2d$blog__$28$1$292f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                    initial: {
                        opacity: 0,
                        x: 20
                    },
                    animate: {
                        opacity: 1,
                        x: 0
                    },
                    exit: {
                        opacity: 0,
                        x: -20
                    },
                    transition: {
                        duration: 0.3
                    },
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$acumen$2d$strategy$2d$blog__$28$1$292f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                            className: "text-3xl font-bold mb-2 text-balance",
                            children: step.question
                        }, void 0, false, {
                            fileName: "[project]/Downloads/acumen-strategy-blog (1)/components/conversational-contact.tsx",
                            lineNumber: 185,
                            columnNumber: 11
                        }, this),
                        step.info && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$acumen$2d$strategy$2d$blog__$28$1$292f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "text-muted-foreground mb-6",
                            children: step.info
                        }, void 0, false, {
                            fileName: "[project]/Downloads/acumen-strategy-blog (1)/components/conversational-contact.tsx",
                            lineNumber: 186,
                            columnNumber: 25
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$acumen$2d$strategy$2d$blog__$28$1$292f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "grid grid-cols-1 md:grid-cols-2 gap-4 mt-8",
                            children: step.options.map((option)=>{
                                const isSelected = currentAnswers.includes(option);
                                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$acumen$2d$strategy$2d$blog__$28$1$292f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    onClick: ()=>handleOptionSelect(option),
                                    className: `p-6 rounded-lg border-2 transition-all text-left ${isSelected ? "border-[#00D4AA] bg-[#00D4AA]/10 shadow-lg scale-[1.02]" : "border-border hover:border-[#00D4AA]/50 hover:bg-accent"}`,
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$acumen$2d$strategy$2d$blog__$28$1$292f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex items-center justify-between",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$acumen$2d$strategy$2d$blog__$28$1$292f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "font-medium",
                                                children: option
                                            }, void 0, false, {
                                                fileName: "[project]/Downloads/acumen-strategy-blog (1)/components/conversational-contact.tsx",
                                                lineNumber: 202,
                                                columnNumber: 21
                                            }, this),
                                            isSelected && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$acumen$2d$strategy$2d$blog__$28$1$292f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$acumen$2d$strategy$2d$blog__$28$1$292f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$check$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__CheckCircle2$3e$__["CheckCircle2"], {
                                                size: 20,
                                                className: "text-[#00D4AA]"
                                            }, void 0, false, {
                                                fileName: "[project]/Downloads/acumen-strategy-blog (1)/components/conversational-contact.tsx",
                                                lineNumber: 203,
                                                columnNumber: 36
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/Downloads/acumen-strategy-blog (1)/components/conversational-contact.tsx",
                                        lineNumber: 201,
                                        columnNumber: 19
                                    }, this)
                                }, option, false, {
                                    fileName: "[project]/Downloads/acumen-strategy-blog (1)/components/conversational-contact.tsx",
                                    lineNumber: 192,
                                    columnNumber: 17
                                }, this);
                            })
                        }, void 0, false, {
                            fileName: "[project]/Downloads/acumen-strategy-blog (1)/components/conversational-contact.tsx",
                            lineNumber: 188,
                            columnNumber: 11
                        }, this),
                        step.multiSelect && currentAnswers.length > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$acumen$2d$strategy$2d$blog__$28$1$292f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            onClick: handleNext,
                            className: "mt-8 w-full md:w-auto mx-auto flex items-center justify-center gap-2 bg-[#00D4AA] hover:bg-[#00D4AA]/90 text-white font-semibold px-8 py-4 rounded-lg transition-all hover:scale-[1.02]",
                            children: [
                                "Continue ",
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$acumen$2d$strategy$2d$blog__$28$1$292f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$acumen$2d$strategy$2d$blog__$28$1$292f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$right$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowRight$3e$__["ArrowRight"], {
                                    size: 18
                                }, void 0, false, {
                                    fileName: "[project]/Downloads/acumen-strategy-blog (1)/components/conversational-contact.tsx",
                                    lineNumber: 215,
                                    columnNumber: 24
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/Downloads/acumen-strategy-blog (1)/components/conversational-contact.tsx",
                            lineNumber: 211,
                            columnNumber: 13
                        }, this)
                    ]
                }, currentStep, true, {
                    fileName: "[project]/Downloads/acumen-strategy-blog (1)/components/conversational-contact.tsx",
                    lineNumber: 178,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/Downloads/acumen-strategy-blog (1)/components/conversational-contact.tsx",
                lineNumber: 177,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/Downloads/acumen-strategy-blog (1)/components/conversational-contact.tsx",
        lineNumber: 159,
        columnNumber: 5
    }, this);
}
_s(ConversationalContact, "9n7dZp9QREZ4Nl+p9H/vLJxSJxY=");
_c = ConversationalContact;
var _c;
__turbopack_context__.k.register(_c, "ConversationalContact");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=Downloads_acumen-strategy-blog%20%281%29_components_805cd6b6._.js.map