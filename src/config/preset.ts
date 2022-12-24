import { IPresetFormula } from "@/types";

export const presetFormula: IPresetFormula[] = [
    {
        title: "代数",
        list: [
            {
                url: new URL(
                    "@/assets/images/preset/algebra/algebra_1.png",
                    import.meta.url
                ).href,
                text: "\\left(x-1\\right)\\left(x+3\\right)"
            },

            {
                url: new URL(
                    "@/assets/images/preset/algebra/algebra_2.png",
                    import.meta.url
                ).href,
                text: "\\sqrt{a^2+b^2}"
            },

            {
                url: new URL(
                    "@/assets/images/preset/algebra/algebra_3.png",
                    import.meta.url
                ).href,
                text: "\\left ( \\frac{a}{b}\\right )^{n}= \\frac{a^{n}}{b^{n}}"
            },

            {
                url: new URL(
                    "@/assets/images/preset/algebra/algebra_4.png",
                    import.meta.url
                ).href,
                text: "\\frac{a}{b}\\pm \\frac{c}{d}= \\frac{ad \\pm bc}{bd}"
            },

            {
                url: new URL(
                    "@/assets/images/preset/algebra/algebra_5.png",
                    import.meta.url
                ).href,
                text: "\\frac{x^{2}}{a^{2}}-\\frac{y^{2}}{b^{2}}=1"
            },

            {
                url: new URL(
                    "@/assets/images/preset/algebra/algebra_6.png",
                    import.meta.url
                ).href,
                text: "\\frac{1}{\\sqrt{a}}=\\frac{\\sqrt{a}}{a},a\\ge 0\\frac{1}{\\sqrt{a}}=\\frac{\\sqrt{a}}{a},a\\ge 0"
            },

            {
                url: new URL(
                    "@/assets/images/preset/algebra/algebra_7.png",
                    import.meta.url
                ).href,
                text: "\\sqrt[n]{a^{n}}=\\left ( \\sqrt[n]{a}\\right )^{n}"
            },

            {
                url: new URL(
                    "@/assets/images/preset/algebra/algebra_8.png",
                    import.meta.url
                ).href,
                text: "x ={-b \\pm \\sqrt{b^2-4ac}\\over 2a}"
            },

            {
                url: new URL(
                    "@/assets/images/preset/algebra/algebra_9.png",
                    import.meta.url
                ).href,
                text: "y-y_{1}=k \\left( x-x_{1}\\right)"
            },

            {
                url: new URL(
                    "@/assets/images/preset/algebra/algebra_10.png",
                    import.meta.url
                ).href,
                text: `\\left\\{\\begin{matrix}
                x=a + r\\text{cos}\\theta \\\\
                y=b + r\\text{sin}\theta
                \\end{matrix}\\right.`
            },

            {
                url: new URL(
                    "@/assets/images/preset/algebra/algebra_11.png",
                    import.meta.url
                ).href,
                text: `\\begin{array}{l}
                \\text{对于方程形如：}x^{3}-1=0 \\\\
                \\text{设}\\text{:}\\omega =\\frac{-1+\\sqrt{3}i}{2} \\\\
                x_{1}=1,x_{2}= \\omega =\\frac{-1+\\sqrt{3}i}{2} \\\\
                x_{3}= \\omega ^{2}=\\frac{-1-\\sqrt{3}i}{2}
                \\end{array}`
            },

            {
                url: new URL(
                    "@/assets/images/preset/algebra/algebra_12.png",
                    import.meta.url
                ).href,
                text: `\\begin{array}{l}
                    a\\mathop{{x}}\\nolimits^{{2}}+bx+c=0 \\\\
                    \\Delta =\\mathop{{b}}\\nolimits^{{2}}-4ac \\\\
                    \\left\\{\\begin{matrix}
                    \\Delta \\gt 0\\text{方程有两个不相等的实根} \\\\
                    \\Delta = 0\\text{方程有两个不相等的实根} \\\\
                    \\Delta \\lt 0\\text{方程有两个不相等的实根}
                    \\end{matrix}\\right.
                \\end{array}`
            },

            {
                url: new URL(
                    "@/assets/images/preset/algebra/algebra_13.png",
                    import.meta.url
                ).href,
                text: `\\begin{array}{l}
                a\\mathop{{x}}\\nolimits^{{2}}+bx+c=0 \\\\
                \\Delta =\\mathop{{b}}\\nolimits^{{2}}-4ac \\\\
                \\mathop{{x}}\\nolimits_{{1,2}}=\\frac{{-b \\pm
                \\sqrt{{\\mathop{{b}}\\nolimits^{{2}}-4ac}}}}{{2a}} \\\\
                \\mathop{{x}}\\nolimits_{{1}}+\\mathop{{x}}\\nolimits_{{2}}=-\\frac{{b}}{{a}} \\\\
                \\mathop{{x}}\\nolimits_{{1}}\\mathop{{x}}\\nolimits_{{2}}=\\frac{{c}}{{a}}
                \\end{array}`
            }
        ]
    },

    {
        title: "几何",
        list: [
            {
                url: new URL(
                    "@/assets/images/preset/geometry/geometry_1.png",
                    import.meta.url
                ).href,
                text: "\\Delta A B C "
            },

            {
                url: new URL(
                    "@/assets/images/preset/geometry/geometry_2.png",
                    import.meta.url
                ).href,
                text: "a \\parallel c,b \\parallel c \\Rightarrow a \\parallel b "
            },

            {
                url: new URL(
                    "@/assets/images/preset/geometry/geometry_3.png",
                    import.meta.url
                ).href,
                text: "l \\perp \\beta ,l \\subset \\alpha \\Rightarrow \\alpha \\perp \\beta "
            },

            {
                url: new URL(
                    "@/assets/images/preset/geometry/geometry_4.png",
                    import.meta.url
                ).href,
                text: `\\left.\\begin{matrix} 
                a \\perp \\alpha \\\\ 
                b \\perp \\alpha 
              \\end{matrix}\\right\\}\\Rightarrow a \\parallel b`
            },

            {
                url: new URL(
                    "@/assets/images/preset/geometry/geometry_5.png",
                    import.meta.url
                ).href,
                text: "P \\in \\alpha ,P \\in \\beta , \\alpha \\cap \\beta =l \\Rightarrow P \\in l"
            },

            {
                url: new URL(
                    "@/assets/images/preset/geometry/geometry_6.png",
                    import.meta.url
                ).href,
                text: "\\alpha \\perp \\beta , \\alpha \\cap \\beta =l,a \\subset \\alpha ,a \\perp l \\Rightarrow a \\perp \\beta "
            },

            {
                url: new URL(
                    "@/assets/images/preset/geometry/geometry_7.png",
                    import.meta.url
                ).href,
                text: `\\left.\\begin{matrix} 
                a \\subset \\beta ,b \\subset \\beta ,a \\cap b=P \\\\  
                a \\parallel \\partial ,b \\parallel \\partial  
              \\end{matrix}\\right\\}\\Rightarrow \\beta \\parallel \\alpha `
            },

            {
                url: new URL(
                    "@/assets/images/preset/geometry/geometry_8.png",
                    import.meta.url
                ).href,
                text: "\\alpha \\parallel \\beta , \\gamma \\cap \\alpha =a, \\gamma \\cap \\beta =b \\Rightarrow a \\parallel b "
            },

            {
                url: new URL(
                    "@/assets/images/preset/geometry/geometry_9.png",
                    import.meta.url
                ).href,
                text: "A \\in l,B \\in l,A \\in \\alpha ,B \\in \\alpha \\Rightarrow l \\subset \\alpha "
            },

            {
                url: new URL(
                    "@/assets/images/preset/geometry/geometry_10.png",
                    import.meta.url
                ).href,
                text: `\\left.\\begin{matrix} 
                m \\subset \\alpha ,n \\subset \\alpha ,m \\cap n=P \\\\  
                a \\perp m,a \\perp n 
              \\end{matrix}\\right\\}\\Rightarrow a \\perp \\alpha `
            },

            {
                url: new URL(
                    "@/assets/images/preset/geometry/geometry_11.png",
                    import.meta.url
                ).href,
                text: `\\begin{array}{c} 
                \\text{直角三角形中,直角边长a,b,斜边边长c} \\\\ 
                a^{2}+b^{2}=c^{2} 
              \\end{array} `
            }
        ]
    }
];
