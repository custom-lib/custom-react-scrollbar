import clsx from 'clsx';
import React from 'react';
import './Box.scss';

interface Props extends React.HTMLAttributes<HTMLDivElement> {
    className?: string;
    title?: string;
    desc?: string;
    codeSrc?: string;
    Operation?: React.FC;
}

const Box: React.FC<Props> = ({ title, desc, codeSrc, Operation, children, className, ...otherProps }) => (
    <div className={clsx("box", className)} {...otherProps}>
        <div className="box_title">
            <span>
                {title}
                <a target="_blank" href={codeSrc}>
                    <svg
                        className="icon"
                        viewBox="0 0 1024 1024"
                        version="1.1"
                        xmlns="http://www.w3.org/2000/svg"
                        width="20"
                        height="20"
                        fill="#31456A"
                    >
                        <path d="M1024 512c0 17-6.7 33.2-18.8 45.2l-128 128c-24.2 25.8-64.7 27.1-90.5 2.9-25.8-24.2-27.1-64.7-2.9-90.5 0.9-1 1.9-2 2.9-2.9l82.7-82.8-82.8-82.8c-25-25-25-65.5 0-90.5s65.5-25 90.5 0l128 128c12.1 12.1 18.9 28.4 18.9 45.4zM697.2 284.5l-256 512h-0.6c-15.4 31.5-53.5 44.6-85 29.2-22-10.8-35.9-33.2-35.6-57.7 0.2-9.9 2.7-19.6 7.4-28.3h-0.6l256-512h0.6c15.4-31.5 53.5-44.6 85-29.2 21.9 10.7 35.8 33.1 35.6 57.5-0.2 9.9-2.7 19.6-7.4 28.4l0.6 0.1zM192 704c-17 0-33.3-6.7-45.2-18.8l-128-128c-25-25-25-65.5-0.1-90.5l0.1-0.1 128-128c25-25 65.5-25 90.5 0s25 65.5 0 90.5L154.5 512l82.8 82.8c25 25 25 65.5 0 90.5-12.1 12-28.3 18.7-45.3 18.7z"></path>
                    </svg>
                </a>
            </span>
        </div>
        <div className="box_desc">{desc}</div>
        {Operation &&
            <div className="box_operation">
                <Operation />
            </div>
        }
        <div className="box_content">{children}</div>
    </div>
);

export default Box;
