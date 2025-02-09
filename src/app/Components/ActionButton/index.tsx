"use client";
interface ActionButtonProps {
  text: string;
  onClick: () => void;
}

export default function ActionButton({ text, onClick }: ActionButtonProps) {
  return (
    <div>
      <button
        className="bg-lightBlue h-{32px} width-{170px} rounded-md "
        onClick={onClick}
      >
        <p className="text-black font-Actor">{text}</p>
      </button>
    </div>
  );
}
